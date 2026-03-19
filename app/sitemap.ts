import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://matrixvisa.com',
            lastModified: new Date(),
        },
        {
            url: 'https://matrixvisa.com/pricing',
            lastModified: new Date(),
        },
        {
            url: 'https://matrixvisa.com/contact',
            lastModified: new Date(),
        },
        {
            url: 'https://matrixvisa.com/blog',
            lastModified: new Date(),
        },
    ];
}
