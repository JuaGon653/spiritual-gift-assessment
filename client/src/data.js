const data = [
    {
        questionNum: 1,
        question: "People often ask me for spiritual or personal advice."
    },
    {
        questionNum: 2,
        question: "I can effectively explain God's Word to others."
    },
    {
        questionNum: 3,
        question: "I receive pleasure when caring for others."
    },
    {
        questionNum: 4,
        question: "I can speak God's Word so that others turn from sin."
    },
    {
        questionNum: 5,
        question: "I can feel the pain of suffering people and try to help them in their recovery."
    },
    {
        questionNum: 6,
        question: "I can inspire others to achieve their goals."
    },
    {
        questionNum: 7,
        question: "People often ask me about the meaning of a particular Scripture or biblical truth."
    },
    {
        questionNum: 8,
        question: "I often ask people for their prayer requests so I can pray for them."
    },
    {
        questionNum: 9,
        question: "I enjoy using my home as a place to minister to others."
    },
    {
        questionNum: 10,
        question: "I prefer to work “behind the scenes” on a project or program."
    },
    {
        questionNum: 11,
        question: "I generously give to people in need or to programs, and I receive joy in doing so."
    },
    {
        questionNum: 12,
        question: "It's easy for me to trust God to answer my prayers."
    },
    {
        questionNum: 13,
        question: "I can explain the Gospel message to others so that it's understood."
    },
    {
        questionNum: 14,
        question: "I usually look for the best in people."
    },
    {
        questionNum: 15,
        question: "I can tell the difference between spiritual truth and false teachings."
    },
    {
        questionNum: 16,
        question: "I enjoy the details of planning events and tasks and organizing groups."
    },
    {
        questionNum: 17,
        question: "I'm a good problem solver and can find solutions often overlooked by others."
    },
    {
        questionNum: 18,
        question: "I enjoy personal Bible study and research, knowing that the information I present can affect someone's eternity."
    },
    {
        questionNum: 19,
        question: "I desire to help wandering believers get back on the right path."
    },
    {
        questionNum: 20,
        question: "I'm compelled to confront people with the truth of God's Word."
    },
    {
        questionNum: 21,
        question: "I have patience when it comes to helping people get their lives back on track after a crisis."
    },
    {
        questionNum: 22,
        question: "Helping communicate a vision is one of my strengths."
    },
    {
        questionNum: 23,
        question: "It's easy for me to share my Bible knowledge with others."
    },
    {
        questionNum: 24,
        question: "I often lose track of the time when I pray and believe God gives me special insight in knowing what to pray about."
    },
    {
        questionNum: 25,
        question: "I like to meet new people and help them feel comfortable in new surroundings."
    },
    {
        questionNum: 26,
        question: "I don't mind doing repetitive and routine work if it supports the ministry of my church."
    },
    {
        questionNum: 27,
        question: "God has given me extra financial resources so that I might be able to generously support the church."
    },
    {
        questionNum: 28,
        question: "Even during difficult circumstances, I have confidence that God will provide assistance and resources to get me through."
    },
    {
        questionNum: 29,
        question: "I like to develop relationships with non-Christians in order to share the Gospel with them."
    },
    {
        questionNum: 30,
        question: "I am able to encourage and reassure others."
    },
    {
        questionNum: 31,
        question: "My first impression of people is usually accurate."
    },
    {
        questionNum: 32,
        question: "I organize work in a thorough and detailed manner."
    },
    {
        questionNum: 33,
        question: "I can select the best solution that is needed to resolve an issue."
    },
    {
        questionNum: 34,
        question: "I carefully note, review, and evaluate the material that is taught by others."
    },
    {
        questionNum: 35,
        question: "I like to give holistic guidance to help people with any need or problem they may have."
    },
    {
        questionNum: 36,
        question: "I'm willing to go against the current cultural trend and philosophy if it is not supportive of biblical principles."
    },
    {
        questionNum: 37,
        question: "I enjoy helping people who are often seen by others as dysfunctional, “high maintenance,” or hopeless."
    },
    {
        questionNum: 38,
        question: "I can relate well to others in order to help them reach their full potential."
    },
    {
        questionNum: 39,
        question: "I often schedule time when I can read and study Scripture so that I gain biblical truth and insight."
    },
    {
        questionNum: 40,
        question: " I feel as though I am ministering to others when I pray for them."
    },
    {
        questionNum: 41,
        question: "I believe God directs people who are in need of friendship and community to me."
    },
    {
        questionNum: 42,
        question: "I enjoy taking on those little jobs at church that no one else seems to want to do."
    },
    {
        questionNum: 43,
        question: "I am able to give more of my money to church because I can save and manage my resources well."
    },
    {
        questionNum: 44,
        question: "I know that God will help me accomplish anything he sets before me."
    },
    {
        questionNum: 45,
        question: "I can help people connect to the Gospel so it applies to their needs."
    },
    {
        questionNum: 46,
        question: "I enjoy sharing the promises of God so that others may receive hope."
    },
    {
        questionNum: 47,
        question: "I can spot a “phony” when others may be deceived by their actions."
    },
    {
        questionNum: 48,
        question: "I can establish goals and objectives in order to achieve results."
    },
    {
        questionNum: 49,
        question: "I can usually determine the outcome of a person's lifestyle choices."
    },
    {
        questionNum: 50,
        question: "I enjoy a systematic approach to Bible study."
    },
    {
        questionNum: 51,
        question: "I am able to provide long-term care to those who need my support."
    },
    {
        questionNum: 52,
        question: "I feel the need to correct people when their actions are wrong or contrary to God's Word."
    },
    {
        questionNum: 53,
        question: "My heart goes out to hurting people."
    },
    {
        questionNum: 54,
        question: "I enjoy goal-setting and leading people to accomplish their goals."
    },
    {
        questionNum: 55,
        question: "I usually discover biblical insights when studying Scripture, which helps others better understand God's Word."
    },
    {
        questionNum: 56,
        question: "When I hear about a crisis or someone in need, I feel an urgency to pray."
    },
    {
        questionNum: 57,
        question: "I can create an accepting environment where people feel at home in any setting."
    },
    {
        questionNum: 58,
        question: "I like to use my learned skills to help out with whatever job needs to be done."
    },
    {
        questionNum: 59,
        question: "I often limit my lifestyle options so I can give my church a higher portion of my income."
    },
    {
        questionNum: 60,
        question: "I trust God in circumstances where success cannot be guaranteed by human effort alone."
    },
    {
        questionNum: 61,
        question: "I enjoy asking people to make a faith commitment to Jesus."
    },
    {
        questionNum: 62,
        question: "I take pleasure in encouraging people who may be doubtful in their faith."
    },
    {
        questionNum: 63,
        question: "I usually see things as black or white, right or wrong."
    },
    {
        questionNum: 64,
        question: "I am able to identify and utilize the resources necessary to complete a task."
    }
];

export default data;