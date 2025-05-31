// This file contains serverless functions for fetching GTFS data. 
// It can be used to handle API requests related to the MTA data.

const fetch = require('node-fetch');

const MTA_GTFS_URLS = [
  "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs",
  "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-ace",
  "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-g",
  "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-nqrw",
  "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-bdfm",
  "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-jz",
  "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-l",
];

module.exports = async (req, res) => {
  try {
    const responses = await Promise.all(MTA_GTFS_URLS.map(url => fetch(url)));
    const dataArrays = await Promise.all(responses.map(response => response.arrayBuffer()));

    res.status(200).json({ data: dataArrays });
  } catch (error) {
    console.error("Error fetching GTFS data:", error);
    res.status(500).json({ error: "Failed to fetch GTFS data" });
  }
};