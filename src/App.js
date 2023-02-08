import CardComponent from "./components/CardComponent";
import CardLisItem from "./components/CardListItem";

const developersListData = [
  {
    image: "https://randomuser.me/api/portraits/men/89.jpg",
    name: "Eric Davis",
    city: "Miami",
    description: "Mobile Developer",
    skills: ["Objective-C", "Swift", "Java", "Kotlin"]
  },
  {
    image: "https://randomuser.me/api/portraits/women/40.jpg",
    name: "Brooklyn Jimenez",
    city: "San Francisco",
    description: "Web Developer",
    skills: ["HTML", "CSS", "JavaScript", "Jquery"]
  },
  {
    image: "https://randomuser.me/api/portraits/women/60.jpg",
    name: "Addison Long",
    city: "Los Angeles",
    description: "Desktop Developer",
    skills: ["QT", "Java", "C#", "SQL Server"]
  }
];

export default function App() {
  return (
    <div className="App">
      <main>
        <CardComponent>
          {
            developersListData.map((item) => {
              return (
                <CardLisItem
                  image={item.image}
                  name={item.name}
                  city={item.city}
                  description={item.description} 
                  skillsItem={item.skills.map((item) => {
                      return (
                        <li>{item}</li>
                      )
                    })
                  }
                  />
              );
            })
          }
        </CardComponent>
      </main>
    </div>
  );
}
