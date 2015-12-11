function controle()
{
	motDePasse = document.getElementById('password');
	if (motDePasse.value.length < 8)
	{
		alert('il faut minimum 8 caractères')
	}
}