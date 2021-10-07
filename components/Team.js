import data from "../data/teamData";

function Team() {
  let list = [];
  for (let organizer of data) {
    list.push(
      <div className="p-2 w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center pb-6">
        <img src={organizer.picture} className="h-24 w-24 rounded-full" />
        <div>{organizer.name}</div>
        <div className="flex justify-center">
          {(() => {
            let socialItems = [];
            if (organizer.social.hasOwnProperty("github")) {
              socialItems.push(
                <a
                  className="p-2 hover:bg-gray-100 rounded-full"
                  target="_blank"
                  href={organizer.social["github"]}
                >
                  <img
                    src="https://ik.imagekit.io/gdgjaen/icons/github_AtbbS2Z3p.svg?updatedAt=1633596138135"
                    className="h-6"
                  />
                </a>
              );
            }
            if (organizer.social.hasOwnProperty("website")) {
              socialItems.push(
                <a
                  className="p-2 hover:bg-gray-100 rounded-full"
                  target="_blank"
                  href={organizer.social["website"]}
                >
                  <img
                    src="https://ik.imagekit.io/gdgjaen/icons/website_U32SRE1c3.svg?updatedAt=1633596138786"
                    className="h-6"
                  />
                </a>
              );
            }
            if (organizer.social.hasOwnProperty("linkedin")) {
              socialItems.push(
                <a
                  className="p-2 hover:bg-gray-100 rounded-full"
                  target="_blank"
                  href={organizer.social["linkedin"]}
                >
                  <img
                    src="https://ik.imagekit.io/gdgjaen/icons/linkedin_e_u8VA8N1.svg?updatedAt=1633596886592"
                    className="h-6"
                  />
                </a>
              );
            }
            if (organizer.social.hasOwnProperty("twitter")) {
              socialItems.push(
                <a
                  className="p-2 hover:bg-gray-100 rounded-full"
                  target="_blank"
                  href={organizer.social["twitter"]}
                >
                  <img
                    src="https://ik.imagekit.io/gdgjaen/icons/twitter_zwAdR2wfA.svg?updatedAt=1633596138541"
                    className="h-6 "
                  />
                </a>
              );
            }
            if (organizer.social.hasOwnProperty("instagram")) {
              socialItems.push(
                <a
                  className="p-2 hover:bg-gray-100 rounded-full"
                  target="_blank"
                  href={organizer.social["instagram"]}
                >
                  <img
                    src="https://ik.imagekit.io/gdgjaen/icons/instagram_iKyx6jfP0.svg?updatedAt=1633596138350"
                    className="h-6"
                  />
                </a>
              );
            }

            return socialItems;
          })()}
        </div>
      </div>
    );
  }
  return (
    <div className="p-4 md:p-6" id="team">
      <h1 className="text-blue-500 text-3xl md:text-4xl md:pl-4">Equipo</h1>
      <div className="pt-4 flex flex-wrap">{list}</div>
    </div>
  );
}

export default Team;
