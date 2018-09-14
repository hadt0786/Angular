import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zodiacpipe'
})
export class ZodiacpipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let arr =[];
    arr = value.split(",");
    //console.log(arr[3]);  
    let dateArr = [];
    dateArr = arr[3].split("/");
    //console.log(dateArr[0]);
    //console.log(dateArr[1]);
    let day = parseInt(dateArr[0]);
    let month = parseInt(dateArr[1]);
    
    switch(month)
    {
           
      
      case (1) :

                      if(day==19) 
                      {
                      
                       return "Capricon";
                        
                        break;
                      }
                      else if(day>=22&&day<=31){
                       return"Aquarius";
                        break;  
                    } 


      case (2) :
                        if(day==18) 
                        {
                         return"Aquarius";
                          break;
                      
                        }
                        else if(day>=22&&day<=31){
                         return"Pisces";
                          break;
                      }
      case (3) :

                      if(day==20) 
                      {
                       return"Pisces";
                        break;                    
                      }else if(day>=22&&day<=31){
                       return"Aries";
                        break;
                    
                    }

      case (4) :
                              if(day==19) 
                          {
                           return"Aries";
                            break;
                          }
                          else if(day>=22&&day<=31){
                           return"Taurus";
                            break;
                        }
      case (5) :
                          if(day==20) 
                          {
                           return"Taurus";
                            break;
                          }
                          else if(day>=22&&day<=31){
                           return"Gemini";
                            break;
                        }
      case (6) :
                          if(day==20) 
                          {
                           return"Gemini";
                            break;
                          }
                          else if(day>=21&&day<=31){
                           return"Cancer";
                            break;
                        }
      case (7) :
                          if(day==22) 
                          {
                           return"Cancer";
                            break;
                          }
                          else if(day>=23&&day<=31){
                           return"Leo";
                            break;
                        }
      case (8) :  
                          if(day==22) 
                          {
                           return"Leo";
                            break;
                          }
                          else if(day>=23&&day<=31){
                           return"Virgo";
                            break;
                        }
      case (9) :
                          if(day==22) 
                          {
                           return"Virgo";
                            break;
                          }
                          else if(day>=23&&day<=31){
                           return"Libra";
                            break;
                        }
      case (10) :
                        if(day==22) 
                        {
                         return"Libra";
                          break;
                        }
                        else if(day>=23&&day<=31){
                         return"Scorpio";
                          break;
                        } 
      case (11) :
                      if(day==21) 
                      {
                       return"Scorpio";
                        break;
                      }
                      else if(day>=22&&day<=31){
                       return"Sagittarius";
                        break;
                    }
      case (12) :
                      if(day==21) 
                      {
                       return"Sagittarius";
                        break;
                      }
                      else if(day>=22&&day<=31){
                         return"Capricon";
                          break;
                      }
      
    default:return"NOt VAlid";break;

    }
  }
  
}
