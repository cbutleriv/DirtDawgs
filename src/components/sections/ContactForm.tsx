import { useState } from 'react';

type Reason = '' | 'general' | 'sponsorship' | 'press' | 'other';

interface FormState {
  name: string;
  email: string;
  reason: Reason;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  reason?: string;
  message?: string;
}

const REASON_LABELS: Record<Exclude<Reason, ''>, string> = {
  general:     'General inquiry',
  sponsorship: 'Sponsorship',
  press:       'Press',
  other:       'Other',
};

function validate(form: FormState): Errors {
  const errors: Errors = {};
  if (!form.name.trim())    errors.name    = 'Name is required.';
  if (!form.email.trim())   errors.email   = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Enter a valid email.';
  if (!form.reason)         errors.reason  = 'Please select a reason.';
  if (!form.message.trim()) errors.message = 'Message is required.';
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', reason: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function update(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="cf-success">
        <p className="cf-success-eyebrow">Message Received</p>
        <h2 className="cf-success-heading">We'll be in touch.</h2>
        <p className="cf-success-body">
          Thanks for reaching out. Someone from the program will respond to your message within 48 hours.
        </p>
        <button type="button" className="cf-reset" onClick={() => { setForm({ name: '', email: '', reason: '', message: '' }); setSubmitted(false); }}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="cf-form" onSubmit={handleSubmit} noValidate>
      <div className="cf-field">
        <label className="cf-label" htmlFor="cf-name">Your Name</label>
        <input
          id="cf-name"
          type="text"
          className={`cf-input${errors.name ? ' cf-input--error' : ''}`}
          placeholder="First and last"
          value={form.name}
          onChange={(e) => update('name', e.target.value)}
          autoComplete="name"
        />
        {errors.name && <span className="cf-field-error">{errors.name}</span>}
      </div>

      <div className="cf-field">
        <label className="cf-label" htmlFor="cf-email">Email</label>
        <input
          id="cf-email"
          type="email"
          className={`cf-input${errors.email ? ' cf-input--error' : ''}`}
          placeholder="you@email.com"
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
          autoComplete="email"
        />
        {errors.email && <span className="cf-field-error">{errors.email}</span>}
      </div>

      <div className="cf-field">
        <label className="cf-label" htmlFor="cf-reason">Reason</label>
        <select
          id="cf-reason"
          className={`cf-input cf-select${errors.reason ? ' cf-input--error' : ''}`}
          value={form.reason}
          onChange={(e) => update('reason', e.target.value as Reason)}
        >
          <option value="" disabled>Select a reason</option>
          {(Object.entries(REASON_LABELS) as [Exclude<Reason, ''>, string][]).map(([val, label]) => (
            <option key={val} value={val}>{label}</option>
          ))}
        </select>
        {errors.reason && <span className="cf-field-error">{errors.reason}</span>}
      </div>

      <div className="cf-field">
        <label className="cf-label" htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message"
          className={`cf-input cf-textarea${errors.message ? ' cf-input--error' : ''}`}
          placeholder="How can we help?"
          rows={5}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
        />
        {errors.message && <span className="cf-field-error">{errors.message}</span>}
      </div>

      <div className="cf-footer">
        <button type="submit" className="cf-submit" disabled={submitting}>
          {submitting ? 'Sending…' : 'Send Message'}
        </button>
        <p className="cf-note">For tryout requests, use the <a href="/tryouts" className="cf-link">tryout form</a>.</p>
      </div>
    </form>
  );
}
