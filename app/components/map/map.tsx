"use client"

import { load } from '@2gis/mapgl';
import React from 'react';
import { useEffect } from 'react';
//import MapWrapper from './mapWrapper';

const MapWrapper = React.memo(
    () => {
        return <div id="map-container" style={{ width: '100%', height: '100%' }}></div>;
    },
    () => true,
);

export
  default function Map() {

    useEffect(() => {
        let map: any
        load().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: [43.11251294606876, 131.87597751617434],
                zoom: 16,
                key: '70000001084274180',
            });
        });
        return () => map && map.destroy();
    }, []);

    return <div style={{ width: '100%', height: '100%' }}>
        <MapWrapper />
    </div>
  }