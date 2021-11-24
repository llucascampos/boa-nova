import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from './http.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  formulario: FormGroup;
  appKey: string = '9CC887639EE20713B00FFDD016F7921384484EABAA344D5A9012D2F3CE8B90CFAB0318CC1A6AEC4F81E12A49F7A2CCC8'
  emailDestino: string = 'boanova@boanovaservicos.com.br'
  assunto: string = 'mensagem recebida atraves do site'
  url: string = 'https://api.elasticemail.com/v2/email/send'
  mensagemAlerta: string = 'Mensagem enviada com sucesso'
  exibirAlerta: boolean = false;

  retornoEmail: {
    data: {},
    success: boolean
  }

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formulario = new FormGroup({
      nome: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      mensagem: new FormControl(null, [Validators.required, Validators.maxLength(300)])

    })
  }

  enviarMsg() {
    if (this.formulario.valid) {
      let corpoEmail = `Nome: ${this.formulario.value.nome}. mensagem: ${this.formulario.value.mensagem}`
      let urlEmail = `${this.url}?apikey=${this.appKey}
      &subject=${this.assunto}
      &from=${this.formulario.value.email}
      &to=${this.emailDestino}
      &bodyHtml=${corpoEmail}`

      this.httpService.enviarEmail(urlEmail).subscribe(res =>{
        if (res.success){
          this.exibirAlerta = true;
          this.formulario.reset()
          setTimeout(()=> {
            this.exibirAlerta = false;
          }, 3000)

        }else {
          alert('Desculpe, ocorreu um erro ao enviar a mensagem!')
        }
      })
    }
  }

}
