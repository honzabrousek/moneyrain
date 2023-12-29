<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>💸MoneyRain💸</title>
  <link rel="stylesheet" href="styles/main.css" />
  <link rel="stylesheet" href="styles/cards.css" />
  <link rel="stylesheet" href="styles/layout.css" />
</head>

<body>
  <header>
    <nav>
      <div class="nav-bar">
        <div style="width: 20%; display: inline;">
          <h3 style="display: inline;">online players: <?php echo rand(320, 323) ?></h3>
        </div>
        <div style="float: right; display: inline;">
          <img height="60px" src="./img/icons/settings.jpg" alt="nastavení" />
          nastavení
          <a href="https://www.instagram.com/moneyraingame/" target="_blank" rel="noopener noreferrer">
            <img height="60px" src="./img/icons/instagram.svg" alt="instagram" />
            ig
          </a>
        </div>
    </nav>
  </header>

  <main>
    <?php include 'main.php'; ?>
  </main>

  <footer>
  </footer>
</body>

</html>