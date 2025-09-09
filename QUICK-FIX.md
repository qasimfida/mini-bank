# 🚀 Quick Fix: Login Issues

## ✅ The Problem
You're getting `{"success":false,"message":"Server error"}` because:
1. The database was reset and has no users
2. You need to **register** before you can **login**

## 🎯 Solution

### Step 1: Start the Application
```bash
npm run dev
```

### Step 2: Create an Admin Account
1. **Visit:** http://localhost:3000
2. **Click "Register"**
3. **Fill in the form:**
   - First Name: `Admin`
   - Last Name: `User`
   - Email: `admin@minibank.com`
   - Password: `admin123`
   - **Account Type: `Admin`** ⚠️ **Important!**
4. **Click "Create Account"**

### Step 3: Now You Can Login
- **Email:** `admin@minibank.com`
- **Password:** `admin123`

## 📝 Test Credentials (After Registration)

### Admin Account
- **Email:** admin@minibank.com
- **Password:** admin123
- **Role:** ADMIN
- **Starting Balance:** $100,000

### Create Customer Account (Optional)
- **Email:** customer@minibank.com  
- **Password:** customer123
- **Role:** CUSTOMER
- **Starting Balance:** $0

## 🔧 Why This Happened

The `.env` file was missing, causing:
1. Database connection issues
2. Empty database (no users)
3. Login attempts failing because no users exist

## ✅ What's Fixed Now

- ✅ Database properly configured with SQLite
- ✅ Environment variables set correctly
- ✅ Registration working perfectly
- ✅ Login will work after registration

## 🎉 Ready to Use!

Your banking app is fully functional. Just register first, then login!
