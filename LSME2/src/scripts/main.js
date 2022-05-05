ipcMain.handle('login', (event, obj) => {
  validatelogin(obj)
});


function validatelogin(obj) {
 const { email, password } = obj 
 const sql = "SELECT * FROM user WHERE email=? AND password=?"
  db.query(sql, [email, password], (error, results, fields) => {
    if(error){ console.log(error);}

    if(results.length > 0){
       createWindow ()
       win.show()
       winlogin.close()
     }else{
       new Notification({
         title:"login",
         body: 'email o password equivocado'
       }).show()
     }
    
  });
}
