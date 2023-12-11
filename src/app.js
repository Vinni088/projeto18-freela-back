import express  from "express"
import cors from "cors"
import router from "./routes/index.routes.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)
app.get("/", (req, res) => {
    res.status(200).send(
      `
      <div style="
        width: 95vw; 
        height: 95vh; 
        display: flex; 
        justify-content: center; 
        align-items: center;
      ">
      <p style="
        padding: 10px;
        font-size: 2vmax; 
        border: 2px solid gray;
        background-color: lightgray;
        border-radius: 10px;
      ">
        Opa! parece que você está tentando acessar o backend do "GetSamurais" <br/>
        Se esse for o caso, leia o ReadMe do projeto em: <a href="https://github.com/Vinni088/projeto18-freela-back"> Github: projeto18-freela-back </a> 
      </p>
    <div>
      `
    );
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Running server on port ${PORT}`));