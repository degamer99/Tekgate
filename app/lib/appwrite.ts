// app/lib/appwrite.ts
// Ai copied code to be reviewed

import { Client, Account, Databases, Storage } from 'appwrite';

export const client = new Client();

// get keys from website
// save to .env file
// import and use here
client
    .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your endpoint
    .setProject('YOUR_PROJECT_ID'); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
