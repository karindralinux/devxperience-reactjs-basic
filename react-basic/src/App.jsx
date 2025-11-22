import { useEffect } from "react";
import { useState } from "react";

function HomePage() {
  // const siswa = {
  //   nama: "John Doe",
  //   umur: 20,
  //   alamat: "Jl. Raya No. 123",
  //   email: "john.doe@example.com",
  //   phone: "081234567890",
  // }

  // function Paragraph(props) {
  //   console.log(props)
  //   return <p>{props.text}</p>
  // }

  // function Greeting({ waktu, nama }) {
  //   console.log(waktu, nama)
  //   return <p>Selamat {waktu}, {nama}</p>
  // }

  // return (
  //   <>
  //     <h1>Hello World</h1>

  //     <Greeting waktu="pagi" nama="Linux"/>
  //     <Greeting waktu="siang" nama="Andi"/>
  //     <Greeting waktu="sore" nama="Budi"/>

  //   </>
  // );

  // return (
  //   <>
  //     <div
  //       style={{
  //         width: "100px",
  //         height: "100px",
  //         backgroundColor: "red",
  //       }}
  //       className="box"
  //     ></div>
  //   </>
  // );

  // return (
  //   <>
  //     <button
  //       onClick={() => {
  //         handleClick("Halo, ini klik dari button react");
  //       }}
  //     >
  //       Click Me
  //     </button>
  //   </>
  // );

  // const [count, setCount] = useState(0);

  // return (
  //   <>
  //     <button onClick={() => {
  //       setCount(count +1);
  //     }}>+</button>

  //     <span>{count}</span>

  //     <button onClick={() => {
  //       if (count > 0) {
  //         setCount(count -1);
  //       }
  //     }}>-</button>
  //   </>
  // )

  // const [clicked, setClicked] = useState(false);
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   // component did mount
  //   console.log("use effect dijalankan");

  //   return () => {
  //     // component will unmount
  //     console.log("use effect dihapus");
  //   }
  // }, [count]);

  // return (
  //   <>
  //     <h1 id="title">Ini judul</h1>
  //     <button
  //       onClick={() => {
  //         setClicked(!clicked);
  //       }}
  //     >
  //       Klik aku
  //     </button>
  //     <br />
  //     <button onClick={() => {
  //       setCount(count + 1);
  //     }}>Tambah</button>
  //     <span>Nilai Sekarang : {count}</span>
  //   </>
  // );

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // if (isLoggedIn) {
  //   return (
  //     <>
  //       <h1>Selamat datang bang</h1>
  //       <button
  //         onClick={() => {
  //           setIsLoggedIn(false);
  //         }}
  //       >
  //         logout
  //       </button>
  //     </>
  //   );
  // }

  // return (
  //   <>
  //     <h1>Butuh login bang</h1>
  //     <button
  //       onClick={() => {
  //         setIsLoggedIn(true);
  //       }}
  //     >
  //       login
  //     </button>
  //   </>
  // );

  const fruits = ["Mangga", "Apel", "Pisang", "Jeruk"]

  return (
    <ul>
      {fruits.map((fruit, index) => {
        return <li key={index}>{fruit}</li>
      })}
    </ul>
  )
}

export default HomePage;
