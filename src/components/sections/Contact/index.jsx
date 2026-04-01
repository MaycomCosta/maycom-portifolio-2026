import React, { useState } from "react";
import styled from "styled-components";
import { FiArrowUpRight } from "react-icons/fi";

const Wrap = styled.section`
  padding: 8rem 0;
  background: var(--ink);
`;

const Inner = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
  align-items: start;

  @media (max-width: 1024px) { gap: 4rem; padding: 0 2rem; }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3.5rem;
    padding: 0 1.25rem;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const IndexNum = styled.span`
  font-family: 'DM Mono', monospace;
  font-size: 0.7rem;
  color: var(--gray-600);
  letter-spacing: 0.1em;
`;

const SectionTag = styled.span`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gray-500);
`;

const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--white);
  white-space: pre-line;

  em {
    font-style: italic;
    color: var(--gray-500);
  }
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InfoItem = styled.a`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  border-bottom: 1px solid var(--gray-600);
  padding-bottom: 1.5rem;
  transition: border-color 0.2s;

  &:hover { border-color: var(--gray-400); }
`;

const InfoLabel = styled.span`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.68rem;
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gray-500);
`;

const InfoValue = styled.span`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--white);
  font-style: italic;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* Form */
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0;
  padding-top: 2.5rem;
`;

const Field = styled.div`
  border-bottom: 1px solid var(--gray-600);
  transition: border-color 0.25s;
  position: relative;

  &:focus-within { border-color: var(--white); }
`;

const Label = styled.label`
  display: block;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gray-500);
  margin-bottom: 0.4rem;
  padding-top: 1.25rem;
`;

const Input = styled.input`
  width: 100%;
  background: none;
  border: none;
  outline: none;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2rem;
  font-weight: 300;
  color: var(--white);
  padding-bottom: 1.25rem;
  font-style: italic;

  &::placeholder { color: var(--gray-600); font-style: italic; }
`;

const Textarea = styled.textarea`
  width: 100%;
  background: none;
  border: none;
  outline: none;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2rem;
  font-weight: 300;
  color: var(--white);
  padding-bottom: 1.25rem;
  resize: none;
  min-height: 100px;
  font-style: italic;
  line-height: 1.6;

  &::placeholder { color: var(--gray-600); font-style: italic; }
`;

const SubmitRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2.5rem;
`;

const SendBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink);
  background: var(--white);
  border: none;
  padding: 1rem 2rem;
  transition: all 0.25s ease;

  &:hover { background: var(--gray-200); transform: translateY(-1px); }
  &:disabled { opacity: 0.5; }
`;

const SuccessMsg = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem;
  color: var(--gray-400);
  font-style: italic;
  padding: 2rem 0;
`;

const INFO = [
  { label: "email", value: "maycom19costa@gmail.com", href: "mailto:maycom19costa@gmail.com" },
  { label: "phone", value: "+55 11 970160574", href: "tel:+5511970160574" },
  { label: "location", value: "São Paulo, Brazil", href: null },
];

const Contact = ({ t }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const change = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1200));
    setSending(false);
    setSuccess(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSuccess(false), 6000);
  };

  return (
    <Wrap id="contact">
      <Inner>
        <Left>
          <div>
            <MetaRow style={{ marginBottom: "1.5rem" }}>
              <IndexNum>{t("contact.index")}</IndexNum>
              <SectionTag>{t("contact.label")}</SectionTag>
            </MetaRow>
            <Title className="reveal">
              {t("contact.title")}
              {"\n"}<em>{t("contact.title_italic")}</em>
            </Title>
          </div>

          <InfoList>
            {INFO.map(({ label, value, href }) => (
              <InfoItem
                key={label}
                as={href ? "a" : "div"}
                href={href || undefined}
              >
                <InfoLabel>{t(`contact.${label}_label`)}</InfoLabel>
                <InfoValue>
                  {value}
                  {href && <FiArrowUpRight size={16} />}
                </InfoValue>
              </InfoItem>
            ))}
          </InfoList>
        </Left>

        <Form onSubmit={submit}>
          <Field>
            <Label htmlFor="name">{t("contact.name")}</Label>
            <Input id="name" name="name" type="text" placeholder="Your name" value={form.name} onChange={change} required />
          </Field>
          <Field>
            <Label htmlFor="email">{t("contact.email")}</Label>
            <Input id="email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={change} required />
          </Field>
          <Field>
            <Label htmlFor="message">{t("contact.message")}</Label>
            <Textarea id="message" name="message" placeholder="Tell me about your project..." value={form.message} onChange={change} required />
          </Field>

          <SubmitRow>
            {success
              ? <SuccessMsg>{t("contact.success")}</SuccessMsg>
              : (
                <SendBtn type="submit" disabled={sending}>
                  {sending ? t("contact.sending") : t("contact.send")}
                  <FiArrowUpRight size={14} />
                </SendBtn>
              )}
          </SubmitRow>
        </Form>
      </Inner>
    </Wrap>
  );
};

export default Contact;
