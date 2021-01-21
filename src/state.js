const state = {
    header: {
        title: 'Dr',
        firstName: 'Yashi',
        lastName: 'Priya',
        degree: 'MDS',
        speciality: 'Periodontology',
        logo: 'dental.svg',
        copyrightText: '© 2021 Yashi Priya. All Rights Reserved.'
    },
    pages: [
        {
            name: 'Home',
            link: 'home',
            backdrop: 'smiling-people.jpg',
            profilePhotos: [{
                photo: 'picture1.png',
                description: null,
                caption: null
            }],
            content: {
                description: ['Are you suffering with bad breath?', 'Do you have bleeding gums or any other gum related issue?','Consult Dr Yashi Priya, Periodontist (specialist in gum disease).'],
                phoneIcon: 'phone-classic.svg',
                emailIcon: 'email.svg',
                contact: {
                    phones: ['+91 9886429742', '+91 7887325788'],
                    emails: ['yashipriya1@gmail.com', 'shekhar957@gmail.com']
                },
                socialMedia: [
                    {
                        name: 'LinkedIn',
                        link: 'https://www.linkedin.com/in/dryashi',
                        icon: 'linkedin.svg'
                    },
                    {
                        name: 'Instagram',
                        link: 'gumcare by dryashi',
                        icon: 'instagram.svg'
                    }
                ]
            }
        },
        {
            name: 'Periodontics',
            link: 'periodontics',
            decorativePhotos: [
                {
                    photo: 'd1.jpeg'
                },
                {
                    photo: 'd2.jpg'
                }
            ],
            content: [
                {
                    title: 'Who is a Periodontist (Gum Specialist)?',
                    texts: [
                        'A periodontist is a dentist who specializes in the prevention, diagnosis, and treatment of periodontal disease, and in the placement of dental implants. Periodontists are also experts in the treatment of oral inflammation. Periodontists receive extensive training in these areas, including three additional years of education beyond dental school. They are familiar with the latest techniques for diagnosing and treating periodontal disease, and are also trained in performing cosmetic periodontal procedures.',
                        'Periodontists often treat more problematic periodontal cases, such as those with severe gum disease or a complex medical history. Periodontists offer a wide range of treatments, such as scaling and root planing (in which the infected surface of the root is cleaned) or root surface debridement (in which damaged tissue is removed). They can also treat patients with severe gum problems using a range of surgical procedures. In addition, periodontists are specially trained in the placement, maintenance, and repair of dental implants.'
                    ],
                    images:[],
                    links: []
                },
                {
                    title: 'What is Periodontitis?',
                    texts: [
                        'Periodontitis is often known as \'Gum Disease\' and is a very common condition in which the gums and deeper periodontal structures become inflamed. This inflammation of the gums, which usually takes the form of redness, swelling and a tendency to bleed during tooth brushing, is the body’s response to certain bacteria that have been allowed to accumulate on the teeth. Although part of the body’s defense system, this inflammatory response can eventually cause serious damage. If left unchecked, the inflammation can spread down below the gums and along the roots of the teeth, causing destruction of the periodontal ligament and the supporting bone. This ultimately leads to the loosening and potential loss of the teeth.'
                    ],
                    images:['Per1.png'],
                    links: ['https://www.efp.org/patients/what-is-periodontitis.html']
                }
            ],
            collapsableContent: [
                {
                    title: 'What is an “Ongoing Infection”?',
                    texts: [
                        'Have you ever gotten a sliver of wood caught under the skin of your hand? Because the wound is open to bacteria, the site may become infected and so appear red and inflamed. In time, your immune system fights off the bacteria and your hand heals.',
                        'During an ongoing infection, however, your immune system is unable to conquer the bacteria on its own and the pain and redness continue to worsen.',
                        'Periodontal disease is an ongoing infection in the pockets around your teeth. You cannot fight off the infection alone, but with periodontal therapy, we are able to remove debris and bacteria from the site allowing the gum to heal as your hand had.'
                    ],
                    images: ['Per2.png'],
                    links: []
                },
                {
                    title: 'What Can Cause a Burst of Infection Activity?',
                    texts: [
                        'People with periodontal disease have low resistance to periodontal bacteria.  This causes an ongoing gum infection that grows in bursts of activity.  Each time it grows, more support for your teeth is lost.  Some factors that can cause a burst of activity are:',
                        'Poor oral hygiene',
                        'Dental plaque',
                        'Smoking',
                        'Genetic factors',
                        'Stress or tension',
                        'Diet',
                        'Age',
                        'Illness'
                    ],
                    images: [],
                    links: []
                },
                {
                    title: 'Getting Periodontal Infection Treated Right Away',
                    texts: [
                        'When your infection has a burst of activity, or when there are signs that this is about to occur, your general dentist may recommend you see a periodontist.'
                    ],
                    images: [],
                    links: []
                }
            ]
        },
        {
            name: 'Meet The Doctor',
            link: 'meet'
        },
        {
            name: 'Periodontal Treatments',
            link: 'treatments'
        },
        {
            name: 'Gum Disease Faqs',
            link: 'faqs'
        },
        {
            name: 'First Visit',
            link: 'visit'
        }
    ]
};

export default state;