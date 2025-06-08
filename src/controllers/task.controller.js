import pool from "../db.js";

export async function getTasks(req, res){
    try {
        const Resultado = await pool.query("SELECT * from tareas ORDER BY ID ASC");
        res.json(Resultado.rows);
    } catch (error) {
        res.status(500).json({error:"no se pudo procesar la solicitud "})
    }
    
}
export async function createtask(req, res ){
const {id, titulo }=req.body;
  try {
    const Resultado = await pool.query("INSERT INTO tareas values ($1, $2) RETURNING *", [id, titulo] );
    res.status(201).json(Resultado.rows[0]);
   } catch (error) {
      res.status(500).json({error:"no se pudo procesar la solicitud "})
   }
}
export async function updatetask(req, res) {
    const {id} = req.params;
    const {titulo, completada} = req.body
    try {
        const Resultado = await pool.query("update tareas set titulo =$1, completada =$2 where id=$3 returning *",[titulo,completada,id]);
        if (Resultado.rowCount === 0)
            return res,status (404).json({error: "tarea no encontrada "});
        res.json(Resultado.rows[0]);
    } catch (error) {
         res.status(500).json({error:" error al actualidad la tarea "})
    }
    
}

export async function deletetask (req, res) {
    const{id} = req.params;
    try {
         const Resultado = await pool.query("delete from tareas where id= $1",[id]);
         if (Resultado.rowCount === 0){ 
            return res.status (404).json({error: "tarea no encontrada "})
         }
         res.status(204).json({message: "tarea eliminada"})
    } catch (error) { 
          res.status(500).json({ error :"error al eliminar la tarea"});
    }
    
}
    
