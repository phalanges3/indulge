
import { NgModule, ErrorHandler } from '@angular/core'
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular'
import { MyApp } from './app.component'
import { SignUpPage } from '../pages/signup/signup'
import { LoginPage } from '../pages/login/login'
import { BestmatchPage } from '../pages/bestmatch/bestmatch'
import { SearchmorePage } from '../pages/searchmore/searchmore'
import { SelectservicePage } from '../pages/selectservice/selectservice'
import { NailtechdashboardPage} from '../pages/nailtechdashboard/nailtechdashboard'
import { AvailabilityPage} from '../pages/availability/availability'
import { ProfilePage} from '../pages/profile/profile'
import { Ionic2RatingModule } from 'ionic2-rating'
import { Bookartist } from '../providers/bookartist'
import { ModalContentPage  } from '../profile/modal'
import { PaymentPage  } from '../pages/payment/payment'
import { NailartistpagePage } from '../pages/nailartistpage/nailartistpage';
import { ProfilePicsRevs } from '../providers/profile-pics-revs';
import { Apptcal } from '../providers/apptcal'
import { ReviewPage } from '../pages/review/review';
import { ChartModule } from 'angular2-chartjs';
import { Addreview } from '../providers/addreview';
import { DirectionsPage } from  '../pages/directions/directions'

@NgModule({
  declarations: [
    MyApp,
    SignUpPage,
    LoginPage,
    BestmatchPage,
    SearchmorePage,
    SelectservicePage,
    NailtechdashboardPage,
    AvailabilityPage,
    ProfilePage,
    NailartistpagePage,
    PaymentPage,
    ReviewPage,
    DirectionsPage

  ],
  imports: [
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule,
    ChartModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SignUpPage,
    LoginPage,
    BestmatchPage,
    SearchmorePage,
    SelectservicePage,
    NailtechdashboardPage,
    AvailabilityPage,
    ProfilePage,
    PaymentPage,
    NailartistpagePage,
    ReviewPage,
    DirectionsPage
  ],
providers: [Bookartist, ProfilePicsRevs, Apptcal, Addreview, {provide: ErrorHandler, useClass: IonicErrorHandler} ]
})
export class AppModule {}
