const userData = [
  {
    userId: 1,
    userName: "productionHouse1",
    logoUrl: "https://example.com/production_house1_logo.jpg",
    web3WalletNumber: "0x1234567890abcdef",
    bio: "Production House 1 is known for producing high-quality movies across various genres.",
    movies: [1, 2], // Movie IDs produced by this production house
    socialMediaLinks: {
      twitter: "https://twitter.com/productionhouse1",
      facebook: "https://facebook.com/productionhouse1",
      instagram: "https://instagram.com/productionhouse1"
      // Add more social media links as needed
    },
    feedVideos: [
      {
        id: 1,
        title: "Behind the Scenes - Movie 1",
        videoUrl: "https://example.com/production_house1_video1.mp4",
        thumbnailUrl: "https://example.com/production_house1_video1_thumbnail.jpg"
      },
      {
        id: 2,
        title: "Teaser Trailer - Movie 2",
        videoUrl: "https://example.com/production_house1_video2.mp4",
        thumbnailUrl: "https://example.com/production_house1_video2_thumbnail.jpg"
      }
      // Add more feed videos as needed
    ]
  },
  {
    userId: 2,
    userName: "productionHouse2",
    logoUrl: "https://example.com/production_house2_logo.jpg",
    web3WalletNumber: "0x9876543210fedcba",
    bio: "Production House 2 specializes in producing thought-provoking documentaries and indie films.",
    movies: [3], // Movie IDs produced by this production house
    socialMediaLinks: {
      twitter: "https://twitter.com/productionhouse2",
      facebook: "https://facebook.com/productionhouse2",
      instagram: "https://instagram.com/productionhouse2"
      // Add more social media links as needed
    },
    feedVideos: [
      {
        id: 3,
        title: "Documentary Preview - Film 1",
        videoUrl: "https://example.com/production_house2_video1.mp4",
        thumbnailUrl: "https://example.com/production_house2_video1_thumbnail.jpg"
      }
      // Add more feed videos as needed
    ]
  },
  // Add more production house objects as needed
];


export default userData;
