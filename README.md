# Feed MTA Project

This project is a web application that provides real-time information about subway train arrivals in New York City using the MTA's GTFS data.

## Project Structure

- **public/assets/stations.json**: Contains JSON data for the subway stations used in the application.
- **public/assets/svg-routes/**: Directory containing SVG files representing different subway routes.
- **api/fetchGTFS.js**: Serverless functions for fetching GTFS data, handling API requests related to MTA data.
- **index.html**: Main HTML file serving as the entry point for the application, including references to JavaScript files and other assets.
- **main.js**: Contains the main JavaScript logic for the application, including functions to load station data, fetch GTFS data, and update the UI with train positions.
- **package.json**: Configuration file for npm, listing dependencies and scripts for the project.
- **vercel.json**: Configuration settings for deploying the project on Vercel, including routing and build settings.

## Deployment Instructions

To deploy this project on Vercel, follow these steps:

1. Ensure you have a Vercel account. If not, sign up at vercel.com.
2. Install the Vercel CLI globally using npm:
   ```
   npm install -g vercel
   ```
3. Navigate to your project directory:
   ```
   cd path/to/feed-mta
   ```
4. Run the following command to deploy:
   ```
   vercel
   ```
5. Follow the prompts to configure your deployment settings.
6. Once deployed, Vercel will provide a URL where your project is accessible.

## Usage

After deployment, you can access the application through the provided Vercel URL. The application will display real-time train arrival information based on the selected subway station.