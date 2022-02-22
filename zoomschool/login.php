
<?php

Include 'conexao.php';

$instituicao = $_POST['select_inst'];
$usuario = $_POST['txt_user'];
$senha = $_POST['txt_senha'];

$sql = mysqli_query($conexao, "select * from tb_login where (instituicao = '$instituicao' and (ra='$ra' or email='$usuario') and senha='$senha')");

$listar = mysqli_num_rows($sql);
if ($listar > 0) {

	header('Location: feed.html');
}

else {
	//colocar frase de erro na página de login
	echo "<center>";
	echo "<hr>";
	echo "USUARIO OU SENHA INVALIDOS!!!";
	echo "<hr>";
	echo "<br>";
	echo "<a href=\"index.html\">VOLTAR</a>";
}
?>
