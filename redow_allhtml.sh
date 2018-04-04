#!/bin/bash

echo "Do you wish to download files from S3?"
select yn in "Yes" "No"; do
    case $yn in
        Yes ) 	aws s3 cp s3://www.zoomdonor.com/about.html ./ ;
		aws s3 cp s3://www.zoomdonor.com/homepage.html ./ ;
		aws s3 cp s3://www.zoomdonor.com/features.html ./ ;
		aws s3 cp s3://www.zoomdonor.com/pricing.html ./ ;
 		break;;
        No ) exit;;
    esac
done

