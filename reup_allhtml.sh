#!/bin/bash

echo "Do you wish to upload files to S3?"
select yn in "Yes" "No"; do
    case $yn in
        Yes )   aws s3 cp about.html s3://www.zoomdonor.com;
		aws s3 cp homepage.html s3://www.zoomdonor.com;
		aws s3 cp features.html s3://www.zoomdonor.com;
		aws s3 cp pricing.html s3://www.zoomdonor.com;
                break;;
        No ) exit;;
    esac
done







