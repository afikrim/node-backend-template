import { Test, TestingModule } from '@nestjs/testing';
import { HomeController } from './home.controller';
import { HomeService } from 'src/domains/home/home.service';

describe('HomeController', () => {
  let homeController: HomeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HomeController],
      providers: [HomeService],
    }).compile();

    homeController = app.get<HomeController>(HomeController);
  });

  describe('HomeController', () => {
    it('Should be defined', () => {
      expect(homeController).toBeDefined();
    });
  });
});
