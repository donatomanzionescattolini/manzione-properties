# 🏠 Manzione Properties Platform

**Full-Stack Property Management System** built with **Spring Boot + React + PostgreSQL + Stripe + Email Automation.**

This application consolidates all rental operations — tenants, payments, maintenance, and reporting — into one secure,
cloud-ready system.

---

## 🚀 Features

| Module                  | Description                                        |
|:------------------------|:---------------------------------------------------|
| **Authentication**      | JWT-based login (Admin & Tenant roles)             |
| **Property Management** | Add/Edit/Delete property records                   |
| **Tenants**             | Assign properties, view leases                     |
| **Payments**            | Manual entry + Stripe integration for online rent  |
| **Maintenance**         | Tenants submit requests with photos                |
| **Reports**             | Generate, approve, and email monthly owner reports |
| **Analytics**           | Charts showing income vs expenses                  |
| **PDF Generation**      | Owner summary reports (iTextPDF)                   |
| **Email Automation**    | Sends owner reports as PDF attachments             |
| **Docker Ready**        | Includes PostgreSQL and app containers             |

---

## 🧠 Tech Stack

| Layer           | Technology                                 |
|:----------------|:-------------------------------------------|
| **Frontend**    | React + Vite + TailwindCSS + Redux Toolkit |
| **Backend**     | Spring Boot 3 + Spring Security + JPA      |
| **Database**    | PostgreSQL                                 |
| **Payments**    | Stripe API                                 |
| **PDF Reports** | iTextPDF                                   |
| **Email**       | Spring Mail (SMTP)                         |
| **Deployment**  | Docker Compose                             |

---

## 🧩 Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/<yourusername>/manzione-properties.git
cd manzione-properties
