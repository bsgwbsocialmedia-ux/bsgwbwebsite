import React from "react";
import "./Beginning.css";

import scouting1 from "/scouting1.jpg";
import scouting2 from "/scouting2.jpg";
import independent from "/independent.jpg";
import headquators from "/headquators.jpg";
import growth1 from "/growth1.jpg";
import growth2 from "/growth2.jpg";

const Beginning = () => {
  return (
    <div className="begin-container">

      <section className="begin-hero">
        <h1>History</h1>
        <p>
          Discover the inspiring journey of the Scout Movement from its birth
          at Brownsea Island to the establishment of Bharat Scouts and Guides
          in India.
        </p>
      </section>

      <section className="content-section">
        <div className="content-wrapper">
          <div className="section-block">
            <div className="section-text">
              <h2>THE GENESIS OF SCOUTING AND GUIDING IN THE WORLD</h2>
              <p>
                The Boy Scout Movement had a simple start in the year 1907 when a 50 year old Maj. General of Army Lord Baden Powell conducted an experimental camp on Brownsea Island in Poole Harbour, Southern England with 21 boys. All the boys were from different social back grounds. The boys arrived on 25.7.1907 for the camp which was inaugurated on 29th and closed on 9th August 1907. The successful conduct of the camp and publication of the Book "Scouting for Boys" in 1908 marked the start of the Boy Scout Movement.
              </p>
              <p>
                In the year 1909 on 4th September, Crystal Palace Rally was held. It was a unique gathering of about 11,000 scouts. The rally was held, a year and a half after the publication of Scouting for Boys and two years after Robert Baden-Powell's demonstration on Brownsea Island Scout Camp. Several hundred girls including one patrol of girl scouts wearing the boy Scout uniform appeared and wanted to join the Scout Movement. Lord Baden Powell decided to start a movement for Girls with the help of his sister Agnes Baden Powell. In 1910, a movement for Girl Scouts was formally founded.
              </p>
            </div>
            <div className="section-image">
              <img src={scouting1} alt="Brownsea Island Camp" />
            </div>
          </div>
        </div>
      </section>

      <section className="content-section alt-bg">
        <div className="content-wrapper">
          <div className="section-block reverse">
            <div className="section-text">
              <h2>SCOUTING IN INDIA</h2>
              <p>
                Scouting started in India in the year 1909, when Captain T.H.Baker established the first Scout Troop in Bangalore and got it registered with imperial Headquarters, London. Subsequently, Scout Troops were formed at Bangalore, Calcutta, Kirkee (Pune), Simla, Madras, Jabalpur, Lonavla (Mumbai) and registered with the Imperial Headquarters during 1910 and 1911. These units were open to European and Anglo Indian Children only.
              </p>
              <p>
                The first Guide Company in India was started in Jabalpur, Central India in 1911. Within a short span of 2 years, many more guide companies were formed in Howrah, Calcutta, Bombay, Madras and other cities but were directly under the control of Imperial Headquarters, London. The first Company of Indian Girl Guides was formed in 1916 at Pune. Later on, many Guide Companies were formed in different cities. In 1917, Lady Abala Bose, wife of the famous scientist Sir Jagadish Chandra Bose, was appointed as the first Indian Guide Commissioner for Indian guides.
              </p>
              <p>
                As the Scout Movement was not initially open to the Indian boys, Nationalist leaders of India decided to offer Scouting activities to Indian Boys and Sewa Samiti Scout Association was formed with Headquarters in Allahabad by Pandit Madan Mohan Malviya, Pandit Hriday Nath Kunzru and Pandit Sriram Bajpai. Dr.Annie Besant with the help of Shri G.S.Arundale started a seperate Scout Association for Indian Boys in Madras. The first Wood Badge Course was conducted in Calcutta in 1922. A Scoutmasters' training camp was conducted at Pachmarhi in May 1923. Mr. Vivian Bose had attended the first Wood Badge camp held at Pachmarhi. The first formal Jamboree of Boy Scouts was held in Delhi from 1st to 7th February, 1937. Efforts were made for unification of different scout groups existing in India during the visit of Lord Baden Powell to India in 1921 and 1937 but failed. Major reason for the failure in unification was the promise clause which included the word "Duty to King". Our Patriotic sentiments of our Nationalist leaders did not approve the allegiance to the British Empire and instead it was insisted that allegiance loyalty to the Country should be part of the Scout Promise.
              </p>
            </div>
            <div className="section-image">
              <img src={scouting2} alt="Scouting in India" />
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="content-wrapper">
          <div className="section-block">
            <div className="section-text">
              <h2>SCOUTING GUIDING IN INDEPENDENT INDIA</h2>
              <p>
                After the independence of our country, efforts were made for unification of the Scout and Guide Associations functioning in India. Serious efforts were made by our National leaders like Pt.Jawahar Lal Nehru, First Prime Minister of India, Maulana Abul Kalam Azad, the First Education Minister of India, Shri Mangal Das Pakvasa, Governor of Central Province, and Scout leaders Pandit Hriday Nath Kunzru, Pandit Sri Ram Bajpai, Justice Vivian Bose and others for the merger of the Scout / Guide Associations.
              </p>
              <p>
                Dr.Tara Chand, Education Secretary, Government of India made significant contribution in finalizing the merger deed. The Final merger took place on 7th November 1950 and the unified Organisation came into existence under the Name "The Bharat Scouts and Guides". The Girl Guides Association formally joined the Bharat Scouts and Guides a little later on 15th August 1951.
              </p>
            </div>
            <div className="section-image">
              <img src={independent} alt="Independent India Scouting" />
            </div>
          </div>
        </div>
      </section>

      <section className="content-section alt-bg">
        <div className="content-wrapper">
          <div className="section-block reverse">
            <div className="section-text">
              <h2>CONSTITUTION AND HEADQUARTERS</h2>
              <p>
                The Bharat Scouts and Guides is a Registered Society under Societies Registrations Act. It is totally voluntary, non-political and secular Organisation. The National Headquarters of the Bharat Scouts and Guides functioned from Regal Building, Connaught Place, New Delhi, till 1963. Thereafter, it shifted to its own building and is functioning from Lakshmi Mazumdar Bhawan, 16, Mahatma Gandhi Marg, Indra Prasth Estate, New Delhi -110002. The National Headquarters building was inaugurated in the year 1963 by the then Vice President of India Dr. Zakir Hussain.
              </p>
            </div>
            <div className="section-image">
              <img src={headquators} alt="BSG Headquarters" />
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="content-wrapper">
          <div className="section-block">
            <div className="section-text">
              <h2>Growth of Scouting and Guiding activities till 2021</h2>
              <p>
                The first National Council meeting was held on 31.10.1953 with the representatives drawn from the states as per the rules laid down in APRO. Shri Mangaldas Pakvasa was chosen as the first President. Four were elected as Vice-Presidents. Dr. H. N. Kunzru was elected as the National Commissioner. Mr. Vivian Bose and Mrs Queenie were appointed the Chief Commissioners of Scouts and Guides respectively. Pandit Shri Ram Bajpai was appointed the National Organizing Commissioner. The First meeting of the Executive Committee took place on 22nd November 1953.
              </p>
              <p>
                The first National Jamboree of Scouts and Guides was held at Secunderabad (Hyderabad) from December 29, 1953 to 2nd Jan. 1954. 7340 Scouts and Guides demonstrated their Scout-Guide Skills. Pandit Shri Ram Bajpai, N.O.C. was its Director. On the last day, Shri Jawaharlal Nehru, Prime Minister of India visited the Jamboree and spent 40 minutes to witness various activities. In his address, he expressed his wish that every boy and girl in the country should join Scouting/Guiding.
              </p>
              <p>
                Dr. Kunzru and Mr. Vivian Bose relentlessly worked to get a suitable plot for the National Training Centre at Pachmarhi. Dr. Mangaldas Pakvasa gave his support to this move and the state govt. of Madhya Bharat (now Madhya Pradesh) gifted a plot of 45.6 acres for this purpose and later on more land was added by the govt. Presently NTC is located in 56 acres. Dr. Rajendra Prasad, the first President of India laid the foundation stone of B.P. Memorial Bhawan and ancillary structure on 10th Sept. 1956. Seth Kirori Mal Trust donated Rs. 45000/- for setting up the Administrative Block. The Girl Guide Association gave Rs.68000/- to build B.P. Memorial Bhawan.
              </p>
            </div>
            <div className="section-image">
              <img src={growth1} alt="National Jamboree" />
            </div>
          </div>
        </div>
      </section>

      <section className="content-section alt-bg">
        <div className="content-wrapper">
          <div className="section-block reverse">
            <div className="section-text">
              <h2>Conferences &amp; Events</h2>
              <p>
                The First President's Scouts and President's Guides Rally was held at the Rashtrapathi Bhawan on 28th November 1961 in Ashoka Hall. Dr. S. Radhakrishnan, the Officiating President of India presented the Certificates.
              </p>
              <p>
                17th World Scout Conference was hosted by The Bharat Scouts and Guides in 1959 in New Delhi.
              </p>
              <p>
                The 20th Asia-Pacific Regional Scout Conference was held from 7th to 11th October, 2001 in New Delhi, when Shri G. Ranga Rao was the Director of The Bharat Scouts and Guides.
              </p>
              <p>
                36th World Guide Conference by WAGGGS was hosted by The Bharat Scouts and Guides in New Delhi during Sept. 2018.
              </p>
              <p>
                The National Adventure Institute at Pachmarhi was inaugurated by Shri V.P. Deenadayal Naidu, National Commissioner on 9th May 1993. National Youth Adventure Institute was started on 22nd February, 2018 at the National Youth Complex of The Bharat Scouts and Guides at Gadpuri, Palwal in Haryana to promote adventure activities of the youth. Another National Adventure Institute was started at Snow View Campsite, Kurseong, Darjeeling for which the Foundation Stone was laid by Dr.K.K. Khandelwal, I.A.S.(Retd.), Chief National Commissioner on 6th April, 2021. It is a joint venture between The Bharat Scouts and Guides, National Headquarters and The Bharat Scouts and Guides of West Bengal State.
              </p>
            </div>
            <div className="section-image">
              <img src={growth2} alt="BSG Conference" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Beginning;