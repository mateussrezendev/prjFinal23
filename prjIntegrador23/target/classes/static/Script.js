function cadastrarJogo() {
  const id = document.getElementById('id').value;
  const name = document.getElementById('name').value;
  const gender = document.getElementById('gender').value;
  const description = document.getElementById('description').value;
  const squad = document.getElementById('squad').value;
  let url = document.getElementById('url').textContent;
  let thumbnailpath = document.getElementById('thumbnailpath').value;
  // Remover o prefixo "http://"
  url = url.replace(/^https?:\/\//, '');
  thumbnailpath = thumbnailpath.replace(/^https?:\/\//, '');
  
  const requestBody = {
	  id,
      name,
      gender,
      description,
      squad,
      url,
      thumbnailpath
  };

  fetch('http://localhost:8080/jogos/create', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
  })
      .then(response => response.json())
      .then(data => {
          alert('Jogo cadastrado com sucesso!');
          document.getElementById('cadastroForm').reset();
           location.reload();
      })
      .catch(error => {
          console.error('Erro ao cadastrar jogo:', error);
      });
}

function excluirJogo() {
  const id = document.getElementById('id').value;

   fetch(`http://localhost:8080/jogos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id}),
        })
      .then(response => response.json())
      .then(data => {
          alert('Jogo deletado com sucesso!');
          document.getElementById('cadastroForm').reset();
           location.reload();
            
            })
            .catch(error => {
                console.error('Erro ao atualizar jogo:', error);
            });
}



function ListarJogos() {
  fetch(`http://localhost:8080/jogos`)
      .then(response => {
          if (response.status === 404) {
              return Promise.reject('Lista de Jogos não encontrada');
          }
          return response.json();
      })
      .then(data => {

          const tbodyElement = document.getElementById('jogos-tabela').querySelector('tbody');
          tbodyElement.innerHTML = '';

          // Preenche a tabela com os resultados da pesquisa
          data.forEach(jogo => {
            const linhaJogo = document.createElement('tr');
            linhaJogo.innerHTML = `
                  <td style="white-space: pre-line;">${jogo.id}</td>
                  <td style="white-space: pre-line;">${jogo.name}</td>
                <td style="white-space: pre-line;">${jogo.gender}</td>
                <td style="white-space: pre-line;">${jogo.description}</td>
                <td style="white-space: pre-line;">${jogo.squad}</td>>
                <td style="white-space: pre-line;">${jogo.url}</td>
                <td><a href="https://${jogo.thumbnailpath}">Acesse a imagem</a></td>
            `;
            tbodyElement.appendChild(linhaJogo);
        });  
      })
      // Trata os Erros
      .catch(error => {
          console.error('Erro ao pesquisar funcionário:', error);
          const resultadoPesquisa = document.getElementById('resultadoPesquisa');
          resultadoPesquisa.innerHTML = 'Jogo não encontrado.';
      });
}



