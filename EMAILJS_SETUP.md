# Contact Form — EmailJS Setup

Yeh portfolio ka Contact form **EmailJS** use karta hai (free tier — 200 emails/month).
Below steps follow karke 5 minute mein live emails milne lagengi.

## Steps

### 1. EmailJS account banao
- [https://www.emailjs.com/](https://www.emailjs.com/) pe jaa ke sign up karo
- Free tier ke liye credit card nahi chahiye

### 2. Email Service add karo
- Dashboard → **Email Services** → **Add New Service**
- Apna email provider chuno (Gmail recommend — easiest)
- Connect karte hi ek `service_xxxxx` ID milegi → ye **SERVICE_ID** hai

### 3. Email Template banao
- Dashboard → **Email Templates** → **Create New Template**
- Template content kuch aisa likh:

  ```
  Subject: New message from {{from_name}}

  From: {{from_name}} <{{from_email}}>

  {{message}}
  ```

- **To Email** field mein apna email daal (Prabhatbarman98@gmail.com)
- Save karne ke baad `template_xxxxx` ID milegi → ye **TEMPLATE_ID** hai

> ⚠️ Important: Template variables EXACTLY ye hone chahiye:
> `from_name`, `from_email`, `message` — kyunki form ke input `name` attributes yahi hain.

### 4. Public Key copy karo
- Dashboard → **Account** → **General**
- "Public Key" copy karo → ye **PUBLIC_KEY** hai

### 5. `.env` file banao
Project root mein `.env` file create karo (ya `.env.example` se copy karke rename karo):

```bash
cp .env.example .env
```

Phir `.env` mein apne real values daal:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxx
```

### 6. Dev server restart
```bash
npm run dev
```

`.env` changes ke baad Vite ko restart karna zaroori hai.

### 7. Test
- Site khol, Contact section mein form bhar ke submit kar
- Apne email inbox mein mail aayega
- Spam folder bhi check kar lena pehli baar

---

## Production / Deployment

Deploy karte time (Vercel / Netlify / Cloudflare Pages / etc.):
- Hosting platform ke **Environment Variables** section mein wahi 3 variables add karna
- `VITE_` prefix mandatory hai — Vite isi prefix wale env vars ko browser ko expose karta hai

## Security note

`VITE_EMAILJS_PUBLIC_KEY` browser mein bundle hota hai — yeh **public key** hai isiliye safe hai.
But abuse prevention ke liye EmailJS dashboard mein:
- **Allowed Origins** set karo (sirf apne domain se requests allow ho)
- **Rate limiting** enable karo

## Fallback

Agar EmailJS env vars set nahi hain to form "Email service not configured" error dikhayega.
Visitor abhi bhi direct email kar sakte hain ya phone pe contact kar sakte hain — Contact Information section mein clickable links hain.
