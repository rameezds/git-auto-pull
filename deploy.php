<?php
  if ($_GET['token'] === '1245')

  //chdir ('/var/www/html/development/goerli/NFT/frontend');
  echo shell_exec('git pull >> /var/www/html/autopull/gitpull.log 2>&1');
 // echo shell_exec('npm run build >> /var/www/html/autopull/gitpull.log');
  ?>
