# SIM Card Activation Service - Frontend

This is the frontend for managing SIM card activations, deactivations, and retrieving SIM details. The backend is already hosted, so you just need to set up the frontend to interact with the existing API.

## Tech Stack

- **React.js**: JavaScript library for building the user interface.
- **Axios**: For making HTTP requests to the backend.

---

## Setup

Follow these steps to set up and run the frontend locally.

## 1. Clone the Repository

git clone https://github.com/jaypatelll1/sim-card-frontend.git
```bash
cd sim-card-frontend
```

## 2. Install Dependencies

To install the necessary dependencies for the frontend, run:

```bash
npm install
```

## 3. Configure Backend URL

Since the backend is hosted on Render, you will need to configure your frontend to point to the correct backend URL. Open the `src` directory, locate where the Axios API requests are made, and update the URLs to point to your Render backend. For example:

```javascript
axios.post'https://digiplus-it-jaypatel.onrender.com/api/sim/add', { simNumber, phoneNumber });
```

Replace `https://digiplus-it-jaypatel.onrender.com` with your actual Render backend URL.

## 4. Start the Frontend

To start the frontend application, use:

```bash
npm start
```

This will start the React development server and open the app at [http://localhost:3000](http://localhost:3000) in your browser.

## Features

This frontend allows you to:

- Add a new SIM card.
- Activate an existing SIM card.
- Deactivate a SIM card.
- Fetch details of a SIM card.

## API Endpoints

The backend is already hosted on Render, and the following API endpoints are available for the frontend to interact with:

### 1. Add SIM Card
- **URL**: `POST https://digiplus-it-jaypatel.onrender.com/api/sim/add`
- **Body (JSON)**:
  
  ```json
  {
    "simNumber": "SIM12345678",
    "phoneNumber": "9876543210"
  }
  ```

### 2. Activate SIM Card
- **URL**: `POST https://digiplus-it-jaypatel.onrender.com/api/sim/activate`
- **Body (JSON)**:
  
  ```json
  {
    "simNumber": "SIM12345678"
  }
  ```

### 3. Deactivate SIM Card
- **URL**: `POST https://digiplus-it-jaypatel.onrender.com/api/sim/deactivate`
- **Body (JSON)**:
  
  ```json
  {
    "simNumber": "SIM12345678"
  }
  ```

### 4. Get SIM Details
- **URL**: `GET https://digiplus-it-jaypatel.onrender.com/api/sim/sim-details/:simNumber`
- **Response Example**:
  
  ```json
  {
    "simNumber": "SIM12345678",
    "phoneNumber": "9876543210",
    "status": "active",
    "activationDate": "2024-10-07T12:34:56.789Z"
  }
  ```
