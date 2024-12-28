export default function handler(req, res) {
  const videos = [
    {
      id: "AsupXOmt2U4?si=lAk_Skmh9SydICnC",
      title:
        "The Story of Pitha and the Bird on a Winter Morning | Heartwarming Kids Story | Winter Morning Tale",
      thumbnailUrl:
        "https://i.ytimg.com/vi/AsupXOmt2U4/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGGUgVShVMA8=&rs=AOn4CLByj9CEED5jYrJoUOCkYd4xzL3-EQ",
    },
    {
      id: "T6qVGBjJf90?si=H0MyXjDtIB_p5iOK",
      title: "The Adventures of Luna and the Talking Tree",
      thumbnailUrl:
        "https://i.ytimg.com/vi/T6qVGBjJf90/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGE0gPCh_MA8=&rs=AOn4CLBm_D-F2z6H72nWhtbB3c7LdnW00w",
    },
    // Add more videos here
  ];

  res.status(200).json(videos);
}
