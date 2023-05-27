import { getConnection, sql, queries } from "../database";


// Peticion a la base de datos para obtener todos los datos de la tabla Recordatorios
export const getRecordatorios = async (req, res) => {

    // si todo esta bien y no hay fallos retorna los datos de la tabla Recordatorios
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllRecord);

        res.json(result.recordset);
    }
    // si ocurre algun error mostrar el mensaje de error interno del servidor
    catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

export const createNewrecordatorio = async (req, res) => {
    // Resibe los parametros para realizar el insert a la based de datos
    const { Titulo, Recordatorio } = req.body

    // Si los parametros son nulos retorna un mensaje de error
    if (Titulo == null || Recordatorio == null) {
        return res.status(400).json({ message: "Por favor debes ingresar los datos" });
    }
    // Se realizar la peticion de insertar los datos a la base de datos enviando los 
    // parametros a la base de datos
    try {
        const pool = await getConnection();
        await pool.request()
            .input("Titulo", sql.VarChar(255), Titulo)
            .input("Recordatorio", sql.Text, Recordatorio)
            .query(queries.AddNewRecord)

        // mensaje que muestra una notificación con los datos que se 
        //acaban de ingresar a la base de datos
        res.json({ "Notificacion": "Nuevo recordatorio", Titulo, Recordatorio });
    }
    // si ocurre algun error mostrar el mensaje de error interno del servidor
    catch (error) {
        res.status(500);
        res.send(error.message)
    }
}
//=======================================================================
// Peticion para Actualizar
export const updateRecordatorio = async (req, res) => {
    // Resibe los parametros para realizar el update a la based de datos
    const {Titulo, Recordatorio } = req.body;
    const {ID} = req.params;
    // Si los parametros son nulos retorna un mensaje de error
    if (Titulo == null || Recordatorio == null) {
        return res.status(400).json({ message: "Por favor debes ingresar los datos" });
    }
    // Se realiza la peticion de update de los datos a la base de datos enviando los 
    // parametros a la base de datos
    try {
        const pool = await getConnection();
        await pool.request()
            .input("ID", sql.Int, ID)
            .input("Titulo", sql.VarChar(255), Titulo)
            .input("Recordatorio", sql.Text, Recordatorio)
            .query(queries.EditRecord)

        // mensaje que muestra una notificación con los datos que se 
        //acaban de ingresar a la base de datos
        res.json({ "Notificacion": "Actualización de recordatorio", Titulo, Recordatorio });
    }
    // si ocurre algun error mostrar el mensaje de error interno del servidor
    catch (error) {
        res.status(500);
        res.send(error.message)
    }
}
//=======================================================================


//=======================================================================
// Peticion para eliminar 
export const deleteRecordatorio = async (req, res) => {
    // Resibe los parametros para realizar el delete a la based de datos
    const { ID } = req.params;
    // // Si los parametros son nulos retorna un mensaje de error
     if (ID == null) {
        return res.status(400).json({ message: "Por favor debes ingresar los datos" });
     }
    // Se realiza la peticion de delete de los datos a la base de datos enviando los 
    // parametros a la base de datos
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("ID", sql.Int, ID)
            .query(queries.DeleteRecord)

        res.send(result);
    }
    // si ocurre algun error mostrar el mensaje de error interno del servidor
    catch (error) {
        res.status(500);
        res.send(error.message)
    }
}
//=======================================================================
