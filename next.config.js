/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [ 
            'skings-backend-bucket.s3.ap-south-1.amazonaws.com',
            'docdata.s3.ap-south-1.amazonaws.com',
        ]}        
}

module.exports = nextConfig
