# This is a Group Project for SDEV255.

Recommended File Structure:

```text
courses-app(your local repo)/
├── public/                  # Static frontend files (client-side)
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── index.html
├── src/                     # Backend source code
│   ├── config/              # Database connection & environment configs
│   │   └── db.js
│   ├── controllers/         # Logic for handling requests
│   │   └── userController.js
│   ├── models/              # SQL schemas or query logic
│   │   └── userModel.js
│   ├── routes/              # URL path definitions
│   │   └── userRoutes.js
│   └── app.js               # Entry point for the Node server
├── .env                     # Secret environment variables (DB credentials)
├── .gitignore               # Files to ignore in Git (node_modules, .env)
├── package.json             # Project dependencies and scripts
└── README.md
```
