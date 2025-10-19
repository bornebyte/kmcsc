# KMC Students Committee Website

This is the official website for the KMC Students Committee of Kathmandu Model College. It was created to help the committee manage posts, member information, and notices for the students.

## ✨ Features

- **Post Management**: Create, update, and delete posts for events and announcements.
- **Member Management**: A system to manage student committee members.
- **Notifications**: A section for important notices and updates for students.
- **Public Interface**: A clean UI for students to view all posts and notices.

## 🛠️ Tech Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Database**: MongoDB with Mongoose

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18.17.0 or later)
- npm, yarn, or pnpm
- MongoDB database (local or cloud-based like MongoDB Atlas)

### Installation

1.  Clone the repo:
    ```bash
    git clone https://github.com/your-username/kmcsc.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd kmcsc
    ```
3.  Install NPM packages:
    ```bash
    npm install
    ```
4.  Create a `.env.local` file in the root of the project and add your MongoDB connection string:
    ```
    MONGODB_URI="your_mongodb_connection_string"
    ```
5.  Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
