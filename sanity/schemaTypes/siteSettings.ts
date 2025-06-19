import {defineField, defineType} from 'sanity'
import {Settings, SettingsIcon} from 'lucide-react'

export default defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    icon: Settings,
    description:
        'Global site configuration including title, logo, and main content',
    preview: {
        select: {
            title: 'siteTitle',
        },
        prepare({title}) {
            return {
                title: title || 'Site Settings',
                media: SettingsIcon,
            }
        },
    },
    fields: [
        defineField({
            name: 'siteTitle',
            title: 'Site Title',
            description:
                'The main title of your website that appears in the browser tab and search results',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Site Description',
            description:
                'A brief description of your website for SEO and social media sharing',
            type: 'text',
            validation: (Rule) =>
                Rule.max(160).warning(
                    'Longer descriptions may be truncated by search engines'
                ),
        }),
        defineField({
            name: 'headerLogo',
            title: 'Header Logo',
            description:
                'The logo that appears in the website header/navigation',
            type: 'image',
            fields: [
                defineField({
                    name: 'alt',
                    type: 'string',
                    title: 'Alt Text',
                    description: 'Alternative text for accessibility and SEO',
                }),
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'mainHeroImage',
            title: 'Main Hero Image',
            description:
                'The primary hero image displayed on the homepage or main landing area',
            type: 'image',
            fields: [
                defineField({
                    name: 'alt',
                    type: 'string',
                    title: 'Alt Text',
                    description: 'Alternative text for accessibility and SEO',
                }),
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'logo',
            title: 'Main Logo',
            description: 'The primary logo used throughout the website',
            type: 'image',
            fields: [
                defineField({
                    name: 'alt',
                    type: 'string',
                    title: 'Alt Text',
                    description: 'Alternative text for accessibility and SEO',
                }),
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'socialMediaLinks',
            title: 'Social Media Links',
            description: 'Links to your social media profiles',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'socialLink',
                    fields: [
                        defineField({
                            name: 'platform',
                            title: 'Platform',
                            description: 'The social media platform name',
                            type: 'string',
                            options: {
                                list: [
                                    {title: 'Facebook', value: 'facebook'},
                                    {title: 'Twitter', value: 'twitter'},
                                    {title: 'Instagram', value: 'instagram'},
                                    {title: 'LinkedIn', value: 'linkedin'},
                                    {title: 'YouTube', value: 'youtube'},
                                    {title: 'TikTok', value: 'tiktok'},
                                    {title: 'Discord', value: 'discord'},
                                    {title: 'Twitch', value: 'twitch'},
                                    {title: 'Other', value: 'other'},
                                ],
                            },
                        }),
                        defineField({
                            name: 'url',
                            title: 'URL',
                            description:
                                'The full URL to your social media profile',
                            type: 'url',
                            validation: (Rule) => Rule.required(),
                        }),
                    ],
                    //preview: {
                    //    select: {
                    //        platform: 'platform',
                    //        url: 'url',
                    //    },
                    //    prepare({platform, url}) {
                    //        return {
                    //            title: platform
                    //                ? platform.charAt(0).toUpperCase() +
                    //                  platform.slice(1)
                    //                : 'Social Link',
                    //            subtitle: url,
                    //        }
                    //    },
                    //},
                },
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'callToActionText',
            title: 'Call to Action Text',
            description:
                'The main call-to-action text displayed prominently on the website',
            type: 'string',
        }),
    ],
})
