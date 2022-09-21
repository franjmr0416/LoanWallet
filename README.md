
# LoanWallet APP

App Web diseñada para realizar el seguimiento de prestamos y el control de la cartera de prestatarios/clientes, permitiendo agregar cobradores o agentes de cobranza, que se realacionan con los prestamos y zonas de cobranza.


## Run Locally

Create Database and User (MySQL)

```sql
    CREATE DATABASE loan_wallet;
    CREATE USER 'user'@'localhost' IDENTIFIED BY '1234';
    GRANT ALL PRIVILEGES ON loan_wallet.* TO 'user'@'localhost';
    FLUSH PRIVILEGES;
```

Clone the project

```bash
  git clone https://github.com/franjmr0416/LoanWallet.git
```

Go to the project directory

```bash
  cd LoanWallet
```

Install dependencies

```bash
  npm install
  npm install nodemon -g

```
Prisma Migrate DB

```bash
  npx prisma migrate dev

```
Insert Catalogs into DB (not necessary)

```bash
  USE loan_wallet;
  INSERT INTO FrecuenciaPagos(tipo) VALUES("semana"),("quincenal"),("mensual");

```

Start the server with nodemon

```bash
  nodemon app.js
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL`

Example: `DATABASE_URL="mysql://username:password@localhost:3306/loan_wallet?schema=public"`


## Documentation

### Data Model

![drawSQL-export-2022-09-07_00_41](https://user-images.githubusercontent.com/51140256/188797785-d46ea7f8-1318-46e5-937f-3b1c733c782e.png)

## Tech Stack

**Server:** Node, Express, Prisma, MySQL
