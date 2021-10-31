//jshint esversion:8
export const getComments = async () => {
  return [
    {
      id: "1",
      body: "Dude thank you so much for making this,now if only it was possible to somehow get this to stay as the top discussion s that new people dont make these mistakes",
      username: "Cluesless-kun",
      userId: "1",
      parentId: null,
      createdAt: Date.now(),
    },
    {
      id: "2",
      body: "Second comment",
      username: "Tony Hue",
      userId: "2",
      parentId: null,
      createdAt: Date.now(),
    },
    {
      id: "3",
      body: "Working on it,It woll eventually be linkable on the side of discssions",
      username: "Nebuchadnezzer(AFTP)",
      userId: "2",
      parentId: "1",
      createdAt: Date.now(),
    },
    {
      id: "4",
      body: "It should be up now:)",
      username: "Nebuchadnezzer(AFTP)",
      userId: "2",
      parentId: "1",
      createdAt: Date.now(),
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "Cluesless-kun",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
