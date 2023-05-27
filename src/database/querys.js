export const queries = {
    getAllRecord: "SELECT * FROM Recordatorio",
    AddNewRecord: "Insert into Recordatorio values(@Titulo, @Recordatorio)",
    EditRecord: "Update Recordatorio set Titulo = @Titulo, Recordatorio = @Recordatorio where ID = @ID", 
    DeleteRecord: " Delete from Recordatorio where ID = @ID"
}