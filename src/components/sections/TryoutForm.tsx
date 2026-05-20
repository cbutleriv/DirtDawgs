import { useState } from 'react';

/* ── Types ────────────────────────────────────────────────── */

interface FormValues {
  playerName: string;
  dob: string;
  positions: string[];
  currentTeam: string;
  parentName: string;
  phone: string;
  email: string;
  message: string;
}

type Status = 'idle' | 'submitting' | 'success';

const POSITIONS = ['P', 'C', '1B', '2B', 'SS', '3B', 'OF', 'UTL'];

const EMPTY: FormValues = {
  playerName: '',
  dob: '',
  positions: [],
  currentTeam: '',
  parentName: '',
  phone: '',
  email: '',
  message: '',
};

/* ── Validation ───────────────────────────────────────────── */

function validate(v: FormValues): Partial<Record<keyof FormValues, string>> {
  const e: Partial<Record<keyof FormValues, string>> = {};
  if (!v.playerName.trim()) e.playerName = 'Player name is required.';
  if (!v.dob) e.dob = 'Date of birth is required.';
  if (v.positions.length === 0) e.positions = 'Select at least one position.';
  if (!v.parentName.trim()) e.parentName = 'Parent name is required.';
  if (!v.phone.trim()) e.phone = 'Phone number is required.';
  else if (!/^\+?[\d\s\-(). ]{7,}$/.test(v.phone)) e.phone = 'Enter a valid phone number.';
  if (!v.email.trim()) e.email = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid email address.';
  return e;
}

/* ── Sub-components ───────────────────────────────────────── */

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <span role="alert" className="tf-field-error">
      {msg}
    </span>
  );
}

/* ── Main component ───────────────────────────────────────── */

export default function TryoutForm() {
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({});
  const [status, setStatus] = useState<Status>('idle');

  /* helpers */
  function set(field: keyof FormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const errs = validate({ ...values, [field]: value });
      setErrors((prev) => ({ ...prev, [field]: errs[field] }));
    }
  }

  function blur(field: keyof FormValues) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const errs = validate(values);
    setErrors((prev) => ({ ...prev, [field]: errs[field] }));
  }

  function togglePosition(pos: string) {
    setValues((prev) => {
      const has = prev.positions.includes(pos);
      const next = has
        ? prev.positions.filter((p) => p !== pos)
        : prev.positions.length < 3
          ? [...prev.positions, pos]
          : prev.positions;
      if (touched.positions) {
        const errs = validate({ ...prev, positions: next });
        setErrors((e) => ({ ...e, positions: errs.positions }));
      }
      return { ...prev, positions: next };
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const allTouched = Object.fromEntries(
      Object.keys(EMPTY).map((k) => [k, true])
    ) as Record<keyof FormValues, boolean>;
    setTouched(allTouched);
    const errs = validate(values);
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) return;

    setStatus('submitting');
    // Placeholder — console.log until Resend / server action is wired
    console.log('[Tryout Request]', values);
    await new Promise((r) => setTimeout(r, 500));
    setStatus('success');
  }

  /* ── Success state ──────────────────────────────────────── */
  if (status === 'success') {
    return (
      <div className="tf-success">
        <p className="tf-success-eyebrow">Received</p>
        <h3 className="tf-success-heading">We'll be in touch within 24 hours.</h3>
        <p className="tf-success-body">
          Coach Manny or Coach Angel will reach out with everything you need to know before the tryout.
        </p>
        <button className="tf-reset" onClick={() => { setValues(EMPTY); setErrors({}); setTouched({}); setStatus('idle'); }}>
          Submit another request →
        </button>
      </div>
    );
  }

  const busy = status === 'submitting';

  /* ── Form ───────────────────────────────────────────────── */
  return (
    <form className="tf-form" onSubmit={handleSubmit} noValidate aria-label="Tryout request form">

      {/* Row 1: Player Name / Date of Birth */}
      <div className="tf-row">
        <div className="tf-field">
          <label className="tf-label" htmlFor="playerName">
            Player Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="playerName"
            type="text"
            className={`tf-input${errors.playerName && touched.playerName ? ' tf-input--error' : ''}`}
            value={values.playerName}
            onChange={(e) => set('playerName', e.target.value)}
            onBlur={() => blur('playerName')}
            autoComplete="given-name"
            aria-required="true"
            aria-describedby={errors.playerName && touched.playerName ? 'err-playerName' : undefined}
          />
          <FieldError msg={touched.playerName ? errors.playerName : undefined} />
        </div>

        <div className="tf-field">
          <label className="tf-label" htmlFor="dob">
            Date of Birth <span aria-hidden="true">*</span>
          </label>
          <input
            id="dob"
            type="date"
            className={`tf-input${errors.dob && touched.dob ? ' tf-input--error' : ''}`}
            value={values.dob}
            onChange={(e) => set('dob', e.target.value)}
            onBlur={() => blur('dob')}
            aria-required="true"
          />
          <FieldError msg={touched.dob ? errors.dob : undefined} />
        </div>
      </div>

      {/* Row 2: Position(s) / Current Team */}
      <div className="tf-row">
        <div className="tf-field">
          <span className="tf-label" id="positions-label">
            Position(s) — up to 3 <span aria-hidden="true">*</span>
          </span>
          <div
            className={`tf-chips${errors.positions && touched.positions ? ' tf-chips--error' : ''}`}
            role="group"
            aria-labelledby="positions-label"
          >
            {POSITIONS.map((pos) => {
              const selected = values.positions.includes(pos);
              const maxed = values.positions.length >= 3 && !selected;
              return (
                <button
                  key={pos}
                  type="button"
                  className={`tf-chip${selected ? ' tf-chip--on' : ''}${maxed ? ' tf-chip--dim' : ''}`}
                  aria-pressed={selected}
                  disabled={maxed}
                  onClick={() => togglePosition(pos)}
                >
                  {pos}
                </button>
              );
            })}
          </div>
          <FieldError msg={touched.positions ? errors.positions : undefined} />
        </div>

        <div className="tf-field">
          <label className="tf-label" htmlFor="currentTeam">
            Current Team <span className="tf-optional">(optional)</span>
          </label>
          <input
            id="currentTeam"
            type="text"
            className="tf-input"
            value={values.currentTeam}
            onChange={(e) => set('currentTeam', e.target.value)}
            placeholder="e.g. Cal Ripken, Little League"
          />
        </div>
      </div>

      {/* Row 3: Parent Name / Phone */}
      <div className="tf-row">
        <div className="tf-field">
          <label className="tf-label" htmlFor="parentName">
            Parent / Guardian Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="parentName"
            type="text"
            className={`tf-input${errors.parentName && touched.parentName ? ' tf-input--error' : ''}`}
            value={values.parentName}
            onChange={(e) => set('parentName', e.target.value)}
            onBlur={() => blur('parentName')}
            autoComplete="name"
            aria-required="true"
          />
          <FieldError msg={touched.parentName ? errors.parentName : undefined} />
        </div>

        <div className="tf-field">
          <label className="tf-label" htmlFor="phone">
            Phone <span aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            className={`tf-input${errors.phone && touched.phone ? ' tf-input--error' : ''}`}
            value={values.phone}
            onChange={(e) => set('phone', e.target.value)}
            onBlur={() => blur('phone')}
            autoComplete="tel"
            placeholder="(661) 555-0119"
            aria-required="true"
          />
          <FieldError msg={touched.phone ? errors.phone : undefined} />
        </div>
      </div>

      {/* Row 4: Email — full width */}
      <div className="tf-field">
        <label className="tf-label" htmlFor="email">
          Email <span aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          type="email"
          className={`tf-input${errors.email && touched.email ? ' tf-input--error' : ''}`}
          value={values.email}
          onChange={(e) => set('email', e.target.value)}
          onBlur={() => blur('email')}
          autoComplete="email"
          aria-required="true"
        />
        <FieldError msg={touched.email ? errors.email : undefined} />
      </div>

      {/* Row 5: Message — full width */}
      <div className="tf-field">
        <label className="tf-label" htmlFor="message">
          Anything we should know? <span className="tf-optional">(optional)</span>
        </label>
        <textarea
          id="message"
          className="tf-input tf-textarea"
          value={values.message}
          onChange={(e) => set('message', e.target.value)}
          placeholder="Position history, travel constraints, questions for the coaches…"
          rows={4}
        />
      </div>

      <div className="tf-footer">
        <button type="submit" className="tf-submit" disabled={busy} aria-disabled={busy}>
          {busy ? 'Sending…' : 'Submit Request'}
        </button>
        <p className="tf-note">* Required field. We don't share your information.</p>
      </div>

    </form>
  );
}
