import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3379.8338375883095!2d34.81408062018655!3d32.100776225555315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4bf40ab4383d%3A0xff5dd29c8016355f!2z16TXkNeo16cg15TXmdeo16fXldef!5e0!3m2!1siw!2sil!4v1542178822145" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen>
            </iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;