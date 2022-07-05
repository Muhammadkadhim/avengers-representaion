import UserCard from "./components/UserCard";
import avatar from "./images/avatar.png";
function App() {
    const avengers = [
        {
            name: "Steve Rogers",
            nickname: "Captain America",
            avatar: "https://i.pinimg.com/originals/da/c8/9c/dac89ced23e924bbb7bedaa53ad4267f.jpg",
        },
        {
            name: "Elizabeth Olsen",
            nickname: "Scarlett Witch",
            avatar: "https://avatarfiles.alphacoders.com/150/150159.jpg",
        },
        {
            name: "Tony Stark",
            nickname: "Iron Man",
            avatar: "https://ae01.alicdn.com/kf/HTB1rMpnXoCF3KVjSZJnq6znHFXaO/Iron-Man-Tony-Stark-Sunglasses-Square-Sunglasses-Men-Brand-Designer-2019-Glasses-Retro-Robert-Downey-JR.jpg_Q90.jpg_.webp",
        },
        {
            name: "Natasha Romanoff",
            nickname: "Black Widow",
            avatar: "data:image/jpeg;base64,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",
        },
        {
            name: "Bruce Banner",
            nickname: "Hulk",
            avatar: "https://i.pinimg.com/474x/b9/79/a8/b979a83e3684f6ace6a10e9f1e6141b2.jpg",
        },
        {
            name: "Thor",
            nickname: "Thor",
            avatar: "https://pyxis.nymag.com/v1/imgs/743/05c/c32caeb780ba75be7f82725d7ac5d23ab7-30-thor.rsquare.w700.jpg",
        },
    ];
    return (
        <div className="App flex flex-col items-center bg-white-500">
            <header>
                <h1 className="text-2xl font-bold my-6 text-white">Avengers</h1>
            </header>
            {avengers.map((member, index) => {
                return (
                    <UserCard
                        key={index}
                        name={member.name}
                        nickname={member.nickname}
                        avatar={member.avatar}
                    />
                );
            })}
        </div>
    );
}

export default App;
