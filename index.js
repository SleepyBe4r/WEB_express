import express from "express";

const app = express();

//configurar a nossa aplicação para receber os dados do formulário
//você pode escolher entre duas bibliotecas: QS ou QueryString
app.use(express.urlencoded({ extended: true }));

const host = "localhost";
const port = 3000;

var lista_Empresa = [];

function inicio_View(req, resp){
    resp.send(`
        <html>
            <head>
                <title>Início</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
            </head>
            <body>
                <div class="bg-dark p-3 d-flex justify-content-between">
                    <h4 class="text-white m-0">Painel de Controle</h4>
                    <nav class="nav">
                        <a class="nav-link text-white" href="#">Início</a>
                        <a class="nav-link text-white" href="/cadastrar_Empresa">Cadastrar Empresa</a>
                    </nav>
                </div>
                
            </body>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        </html>
        `);
}

function cadastro_Empresa_View(req,resp) {    
    resp.send(`
        <html>
            <head>
                <title>Cadastro de Empresa</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">                
            </head>
            <body>
                <div class="bg-dark p-3 d-flex justify-content-between">
                    <h4 class="text-white m-0">Painel de Controle</h4>
                    <nav class="nav">
                        <a class="nav-link text-white" href="/">Início</a>
                        <a class="nav-link text-white" href="#">Cadastrar Empresa</a>
                    </nav>
                </div>
                <div class="p-4">
                    <div class="container p-4 border rounded bg-light">
                        <h2>Cadastro da Empresa</h2>
                    </div>

                    <div class="container mt-4 border rounded bg-light">
                        <form action="/cadastrar_Empresa" method="POST" class="p-4" novalidate>
                            <div class="form-group p-2">
                                <h2>Empresa</h2>

                                <label for="razao_social" class="form-label">Razão Social</label>
                                <input class="form-control" placeholder="Moraes & irmãos Ltda" type="text" name="razao_social" id="razao_social"> <br>

                                <label for="cnpj" class="form-label">CNPJ</label>
                                <input class="form-control" type="text" name="cnpj" id="cnpj"> <br>                                                                                                

                                <label for="nome_fantasia" class="form-label">Nome Fantasia</label>
                                <input class="form-control" placeholder="Loja do 1,99" type="text" name="nome_fantasia" id="nome_fantasia"> <br>
                                                                
                                <label for="email" class="form-label">Email</label>
                                <input class="form-control" placeholder="Loja199@gmail.com" type="text" name="email" id="email"> <br>

                                <label for="telefone" class="form-label">Telefone</label>
                                <input class="form-control" placeholder="(18) 98123-4567" type="text" name="telefone" id="telefone"> <br>                                                                
                            </div>                            

                            <div class="form-group p-2">
                                <div>
                                    <h2>Endereço</h2>           
                                </div>                    
                                <div class="form-group p-2">    
                                    <hr class="border-dark">
                                    <div class="d-flex">
                                        <div class="form-group w-50 p-1">
                                            <label for="estado" class="form-label">Estado</label>
                                            <select class="form-select" id="estado" name='estado'>
                                                <option value="AC">Acre</option>
                                                <option value="AL">Alagoas</option>
                                                <option value="AP">Amapá</option>
                                                <option value="AM">Amazonas</option>
                                                <option value="BA">Bahia</option>
                                                <option value="CE">Ceará</option>
                                                <option value="DF">Distrito Federal</option>
                                                <option value="ES">Espírito Santo</option>
                                                <option value="GO">Goiás</option>
                                                <option value="MA">Maranhão</option>
                                                <option value="MT">Mato Grosso</option>
                                                <option value="MS">Mato Grosso do Sul</option>
                                                <option value="MG">Minas Gerais</option>
                                                <option value="PA">Pará</option>
                                                <option value="PB">Paraíba</option>
                                                <option value="PR">Paraná</option>
                                                <option value="PE">Pernambuco</option>
                                                <option value="PI">Piauí</option>
                                                <option value="RJ">Rio de Janeiro</option>
                                                <option value="RN">Rio Grande do Norte</option>
                                                <option value="RS">Rio Grande do Sul</option>
                                                <option value="RO">Rondônia</option>
                                                <option value="RR">Roraima</option>
                                                <option value="SC">Santa Catarina</option>
                                                <option selected value="SP">São Paulo</option>
                                                <option value="SE">Sergipe</option>
                                                <option value="TO">Tocantins</option>
                                                </select>
                                        </div>
                                        <div class="form-group w-50 p-1">
                                            <label for="cidade" class="form-label">Cidade</label>        
                                            <input class="form-control" type="text" name="cidade" id="cidade">
                                        </div>                            
                                    </div>
                                    
                                    <div class="d-flex">
                                        <div class="form-group col-2 p-1">
                                            <label for="cep" class="form-label">CEP</label>        
                                            <input class="form-control" type="text" name="cep" id="cep">    
                                        </div>
                                        <div class="form-group col-4 p-1">
                                            <label for="bairro" class="form-label">Bairro</label>        
                                            <input class="form-control" type="text" name="bairro" id="bairro">
                                        </div>
                                        <div class="form-group col-4 p-1">
                                            <label for="rua" class="form-label">Rua</label>        
                                            <input class="form-control" type="text" name="rua" id="rua">
                                        </div>
                                        <div class="form-group col-2 p-1">
                                            <label for="numero" class="form-label">Número</label>        
                                            <input class="form-control" type="text" name="numero" id="numero">
                                        </div>
                                    </div>                                                                        
                                </div>                    
                            </div>  

                            <hr class="border-dark">
                            <button type="submit" class="btn btn-primary">Cadastrar</button>
                        </form>
                    </div>
                </div>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            </body>
        </html>`);            
}

function cadastrar_Empresa(req, resp){
    //recuperar os dados do formulário enviados para o servidor
    const razao_social = req.body.razao_social;
    const cnpj = req.body.cnpj;
    const nome_fantasia = req.body.nome_fantasia;
    const email = req.body.email;
    const telefone = req.body.telefone;
    const estado = req.body.estado;
    const cidade = req.body.cidade;
    const cep = req.body.cep;
    const bairro = req.body.bairro;
    const rua = req.body.rua;
    const numero = req.body.numero;         
    const endereco = `R. ${rua}, ${numero} - ${bairro}, ${cidade}-${estado}, ${cep}`;
    
    //validar a entrada do usuário
    //Caso os dados não estiverem válidos nós deveremos retornar um feedback para o usuário

    if (razao_social && cnpj && nome_fantasia && email && telefone &&
        estado && cidade && cep && bairro && rua && numero) {
        //os dados de entrada são válidos!
        const empresa = { razao_social, cnpj, nome_fantasia, email, telefone, endereco};

        //adicionar o empresa na lista
        lista_Empresa.push(empresa);

        //mostrar a lista de empresas já cadastrados

        resp.write(`
        <html>
            <head>
                <title>Lista de empresas</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                <meta charset="utf-8">
            </head>
            <body>
            <div class="bg-dark p-3 d-flex justify-content-between">
                <h4 class="text-white m-0">Painel de Controle</h4>
                <nav class="nav">
                    <a class="nav-link text-white" href="#">Início</a>
                    <a class="nav-link text-white" href="/cadastrar_Empresa">Cadastrar Empresa</a>
                </nav>
            </div>
            <div class="p-4">
                <div class="container p-4 border rounded bg-light">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Razão Social</th>
                                <th scope="col">CNPJ</th>
                                <th scope="col">Nome Fantasia</th>
                                <th scope="col">Email</th>
                                <th scope="col">Telefone</th>
                                <th scope="col">Endereço</th>
                            </tr>
                        </thead>
                        <tbody>`);
        //adicionar as linhas da tabela
        //para cada empresa, nós devemos criar uma linha na tabela
        for (var i = 0; i < lista_Empresa.length; i++) {
            resp.write(`<tr>
                                    <td>${lista_Empresa[i].razao_social}</td>
                                    <td>${lista_Empresa[i].cnpj}</td>
                                    <td>${lista_Empresa[i].nome_fantasia}</td>
                                    <td>${lista_Empresa[i].email}</td>
                                    <td>${lista_Empresa[i].telefone}</td>
                                    <td>${lista_Empresa[i].endereco}</td>
                                </tr>
                        `);
        }

        resp.write(`</tbody> 
            </table>            
            <a class="btn btn-primary" href="/cadastrar_Empresa">Continuar Cadastrando</a>
            <a class="btn btn-dark" href="/">Voltar para o Menu</a>
            </div>
            </body>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        </html>
            `);
    }//fim do if de validação alt + shift + f
    else
    {

        const estados = {
            "AC": "Acre",
            "AL": "Alagoas",
            "AP": "Amapá",
            "AM": "Amazonas",
            "BA": "Bahia",
            "CE": "Ceará",
            "DF": "Distrito Federal",
            "ES": "Espírito Santo",
            "GO": "Goiás",
            "MA": "Maranhão",
            "MT": "Mato Grosso",
            "MS": "Mato Grosso do Sul",
            "MG": "Minas Gerais",
            "PA": "Pará",
            "PB": "Paraíba",
            "PR": "Paraná",
            "PE": "Pernambuco",
            "PI": "Piauí",
            "RJ": "Rio de Janeiro",
            "RN": "Rio Grande do Norte",
            "RS": "Rio Grande do Sul",
            "RO": "Rondônia",
            "RR": "Roraima",
            "SC": "Santa Catarina",
            "SP": "São Paulo",
            "SE": "Sergipe",
            "TO": "Tocantins"
        };
        //enviar de volta o formulário de cadastro, porém contendo mensagens de validação
        //implementar o html com esse conteúdo!

        resp.write(`
            <html>
            <head>
                <title>Cadastro de Empresa</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">                
            </head>
            <body>
                <div class="bg-dark p-3 d-flex justify-content-between">
                    <h4 class="text-white m-0">Painel de Controle</h4>
                    <nav class="nav">
                        <a class="nav-link text-white" href="/">Início</a>
                        <a class="nav-link text-white" href="#">Cadastrar Empresa</a>
                    </nav>
                </div>
                <div class="p-4">
                    <div class="container p-4 border rounded bg-light">
                        <h2>Cadastro da Empresa</h2>
                    </div>

                    <div class="container mt-4 border rounded bg-light">
                        <form action="/cadastrar_Empresa" method="POST" class="p-4">
                            <div class="form-group p-2">
                                <h2>Empresa</h2>

                                <label for="razao_social" class="form-label">Razão Social</label>
                                <input class="form-control" placeholder="Moraes & irmãos Ltda" type="text" name="razao_social" id="razao_social" value="${razao_social}"> <br>
        `);
        if (!razao_social){
            resp.write(`
                <div>
                    <span><p class="text-danger">Por favor, você deve informar a Razão Social da empresa</p></span>
                </div>
                `);
        }
        resp.write(`<label for="cnpj" class="form-label">CNPJ</label>
                    <input class="form-control" type="text" name="cnpj" id="cnpj" value="${cnpj}"> <br>`);
        if (!cnpj){
            resp.write(`
                <div>
                    <span><p class="text-danger">Por favor, você deve informar o CNPJ da empresa</p></span>
                </div>
                `);
        }
        resp.write(`<label for="nome_fantasia" class="form-label">Nome Fantasia</label>
                    <input class="form-control" placeholder="Loja do 1,99" type="text" name="nome_fantasia" id="nome_fantasia" value="${nome_fantasia}"> <br>`);
        if (!nome_fantasia){
            resp.write(`
                <div>
                    <span><p class="text-danger">Por favor, você deve informar o Nome Fantasia da empresa</p></span>
                </div>
                `);
        }
        resp.write(`<label for="email" class="form-label">Email</label>
                    <input class="form-control" placeholder="Loja199@gmail.com" type="text" name="email" id="email" value="${email}"> <br>`);
        if (!email){
            resp.write(`
                <div>
                    <span><p class="text-danger">Por favor, você deve informar o email da empresa</p></span>
                </div>
                `);
        }
        resp.write(`<label for="telefone" class="form-label">Telefone</label>
                    <input class="form-control" placeholder="(18) 98123-4567" type="text" name="telefone" id="telefone" value="${telefone}"> <br>`);
        if (!telefone){
            resp.write(`
                <div>
                    <span><p class="text-danger">Por favor, informe o telefone da empresa</p></span>
                </div>
                `);
        }
        resp.write(`</div>                            
                    <div class="form-group p-2">
                        <div>
                            <h2>Endereço</h2>           
                        </div>                    
                        <div class="form-group p-2">    
                            <hr class="border-dark">
                            <div class="d-flex">
                                <div class="form-group w-50 p-1">
                                    <label for="estado" class="form-label">Estado</label>
                                    <select class="form-select" id="estado" name='estado'>`);
        for (let [sigla, nomeEstado] of Object.entries(estados)){
            if (sigla == estado){
                resp.write(`<option selected value="${sigla}">${nomeEstado}</option>`);
            }
            else{
                resp.write(`<option value="${sigla}">${nomeEstado}</option>`);
            }
            
        }
        resp.write(`</select>
                </div>
                <div class="form-group w-50 p-1">
                    <label for="cidade" class="form-label">Cidade</label>        
                    <input class="form-control" type="text" name="cidade" id="cidade" value="${cidade}">`);
        if (!cidade){
            resp.write(`
                <div>
                    <span><p class="text-danger">Por favor, informe a cidade!</p></span>
                </div>
                `);
        }
        resp.write(`</div>                            
                </div>
                
                <div class="d-flex">
                    <div class="form-group col-2 p-1">
                        <label for="cep" class="form-label">CEP</label>        
                        <input class="form-control" type="text" name="cep" id="cep" value="${cep}">`);
        if (!cep){
            resp.write(`
                <div>
                    <span><p class="text-danger">Por favor, informe o CEP!</p></span>
                </div>
                `);
        }
        resp.write(`</div>
                    <div class="form-group col-4 p-1">
                        <label for="bairro" class="form-label">Bairro</label>        
                        <input class="form-control" type="text" name="bairro" id="bairro" value="${bairro}">`);
        if (!bairro){
            resp.write(`
                <div>
                    <span><p class="text-danger">Por favor, informe o bairro!</p></span>
                </div>
                `);
        }
        resp.write(`</div>
                    <div class="form-group col-4 p-1">
                            <label for="rua" class="form-label">Rua</label>        
                            <input class="form-control" type="text" name="rua" id="rua" value="${rua}">`);
        if (!rua){
        resp.write(`
            <div>
                <span><p class="text-danger">Por favor, informe a rua!</p></span>
            </div>
            `);
        }
        resp.write(`</div>
                    <div class="form-group col-2 p-1">
                        <label for="numero" class="form-label">Número</label>        
                        <input class="form-control" type="text" name="numero" id="numero" value="${numero}">`);
        if (!numero){
        resp.write(`
            <div>
                <span><p class="text-danger">Por favor, informe a numero!</p></span>
            </div>
            `);
        }
        resp.write(`                </div>
                                </div>                                                                        
                            </div>                    
                        </div>  
                        <hr class="border-dark">
                        <button type="submit" class="btn btn-primary">Cadastrar</button>
                    </form>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        </body>
    </html>`);

    } // else da validação

    resp.end();//será enviada a resposta
}

app.get('/', inicio_View);

app.get("/cadastrar_Empresa",cadastro_Empresa_View);

app.post("/cadastrar_Empresa",cadastrar_Empresa);

app.listen(port, host, () => {
    console.log(`Servidor iniciado no endereço http://${host}:${port}`);    
})