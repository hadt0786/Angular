import { WsaService} from './wsa/wsa.component';

@Component({
  selector: 'body',
  templateUrl: '<h1> {{title}} </h1> <ul>{{wsaList}}',
  styleUrls: ['./wsa.component.css']
})
export class CoursesComponent  {

  
    title = 'List of courses in WSA:';
    
    constructor (service: WsaService)
    {
    this.WsaService = service.getwsaList();
    }
    }

