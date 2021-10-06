import Image from "next/image";
import data from "../data/TeamData";

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
                    src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
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
                    src="https://cdn-icons-png.flaticon.com/512/1231/1231223.png"
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
                    src="https://cdn-icons-png.flaticon.com/512/733/733617.png"
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
                    src="https://cdn-icons-png.flaticon.com/512/733/733635.png"
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
                    src="https://cdn-icons-png.flaticon.com/512/733/733614.png"
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
      <h1 className="text-blue-500 text-3xl">Equipo</h1>
      <div className="pt-4 flex flex-wrap">{list}</div>
    </div>
  );
}

export default Team;
