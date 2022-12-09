import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {

    return (
        <>
        <section className='custom-container p-4'>
            <h2 className='text-center pt-2 heading'>God's Got a Gift... for everyone!</h2>
            <p className='pt-3'>After Jesus' death, a dozen disciples spread the miraculous news of God's Son. That small band of believers multiplied and became the early church. Through the Holy Spirit, God equipped each member of the church with a gift to help them serve and strengthen each other. These gifts empowered Christians to do God's work, yielding greater fruit than might be possible beyond their own talents.
            <br />
            <br />
            God is still in the gift-giving business today!
            <br />
            <br />
            Simply put, spiritual gifts are special gifts given by God for Christian service. They're unique abilities God gives to help us do his good work.
            <br />
            <br />
            What are some things you do well? What are the things you're good at? Some of the
            gifts God has given you fall into the category of “natural talents.” Talents are given
            to everyone. The saying “you're born with it” really is true! At our physical birth
            we're born with natural abilities that we can do well. Things like sports, cooking,
            artistic ability, and math aptitude would fall into this category.
            <br />
            <br />
            But the Bible tells us that at our spiritual birth we receive spiritual gifts.
            <br />
            <br />
            Scripture gives these insights about spiritual gifts:
            <br></br>
            • God wants us to be knowledgeable about spiritual gifts (1 Corinthians 12:1).
            <br></br>
            • Every Christ-follower has been given at least one gift (1 Peter 4:10).
            <br></br>
            • God wants us to use our gifts (1 Timothy 4:14).
            <br></br>
            • Our spiritual gifts have been given to equip us to be able to serve
            (Ephesians 4:11-12).
            <br></br>
            • God has already planned the good works he wants us to do. (Ephesians 2:10)
            <br></br>
            Yet you may be asking, “How can I help people identify their gifts, so they can serve with purpose and passion?”
            <br />
            <br />
            The following assessment is a guide to help church members (or you!) identify strengths, or areas of gifting. The goal in taking the assessment isn't to label or box people into a type of service. Rather, it's to open hearts and eyes about types of ministry that get people energized and excited.
            <br />
            <br />
            Remember, a spiritual gifting isn't something you earn or learn. It's the appearance of the Holy Spirit in you, through a special gift! Approach this assessment with joy and wonder, looking forward to the ways God has uniquely gifted your team to be a part of his awesome works!</p>
            <Link to='/quiz'>
               <button className="btn">Take Assessment</button> 
            </Link>
            
        </section>
        </>
    )
};

export default HomePage;