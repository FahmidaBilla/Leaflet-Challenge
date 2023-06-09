# Leaflet Challenge

## Overview


The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.


## Leaflet Earthquake Visualization


### Step 1:

First step is to visualize an earthquake dataset. Complete the following steps:

Get your dataset. To do so, follow these steps:

The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the USGS GeoJSON Feed page at http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php and choose a dataset to visualize.

When you click a dataset (such as "All Earthquakes from the Past 7 Days"), you will be given a JSON representation of that data. Use the URL of this JSON to pull in the data for the visualization.


### Step 2:

Next step is to import and visualize the data by doing the following:

- Using Leaflet, create a map that plots all the earthquakes from the dataset based on their longitude and latitude.

- The data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.

Hint: The depth of the earth can be found as the third coordinate for each earthquake.

- Include popups that provide additional information about the earthquake when its associated marker is clicked.

- Create a legend that will provide context for the map data.



## Result


<img width="1439" alt="leaflet_map" src="https://user-images.githubusercontent.com/120361200/232618433-c023b3ab-b566-48df-826d-ff6af63e0189.png">




## Dashboard Link

Please refer to the following link for viewing dashboard

https://fahmidabilla.github.io/Leaflet-Challenge/



## References

Dataset created by http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php


