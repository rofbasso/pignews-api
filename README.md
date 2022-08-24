## PigNewsAPI

# Calendario do Time

**HU**
Será feita uma busca na api com as informações dos jogos do palmeiras e salvo na tabela

**RF**
- [] Deve ser possível cadastrar um jogo
- [] Deve ser possível editar um jogo
- [] Deve ser possível buscar um jogo
- [] Deve ser possível buscar os jogos de um mês

**RNF**
- [] Utilizar axios para acessar a api
- [] Utilizar a apiverdao.palmeiras.com.br para busca das informações

**RN**
- [] O jogo deve ser preenchido automaticamente com as informações vinda da api
- [] Não deve ser possível adicionar o mesmo jogo duas vezes

# Envio da informação por whatsapp

**HU**
O sistema irá enviar uma mensagem pro numero cadastrado

**RF**
- [] Deve ser possível enviar uma mensagem por whatsapp

**RNF**
- [] Utilizar axios para acessar a api
- [] Utilizar a api da meta https://graph.facebook.com/v13.0
- [] RabbitMQ para fila de mensagens

**RN**
- [] Limite de mensagens no dia/mês

# Resposta automatica

**HU**
Quando o cliente selecionar uma das opções automaticas deve ser enviada uma resposta automatica

**RF**
- [] Deve ser possível cadastrar uma resposta automatica
- [] Deve ser possível buscar uma resposta automatica
- [] Deve ser possível buscar todas as respostas automaticas
- [] Deve ser possível deletar uma resposta automatica
- [] Deve ser possível editar uma resposta automatica

**RN**
- [] Não deve ser possível enviar uma resposta que não exista
- [] Deve ter um campo de ligação com as opções automaticas
- [] Deve ser enviada uma mensangem automaticamente em dia de jogo
    -- [] A mensagem deve conter:
        --- [] Nome do campeonato
        --- [] Time Mandante
        --- [] Time Visitante
        --- [] Data do Jogo
        --- [] Hora do Jogo
        --- [] Quem vai transmitir


# Cadastrar opções automaticas

**HU**
Quando o cliente enviar uma mensagem deve ser respondido com as opções automaticas

**RF**
- [] Deve ser possível cadastrar uma lista de opções
- [] Deve ser possível buscar uma lista de opções
- [] Deve ser possível buscar todas as listas de opções
- [] Deve ser possível editar uma lista de opções
- [] Deve ser possível deletar uma lista de opções

**RN**
- [] As opções devem ser numericas
- [] Gerar uma resposta padrão para uma opção que não exista

# Receber respostas pelo whatsapp

**RF**
- [] Deve ser possível receber respostas do whatsapp

**RN**
- []
