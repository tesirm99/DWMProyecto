import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { CreateUserDto } from './create-user.dto';
import { UserService } from './user.service';

describe('Cats Controller', () => {
  let controller: UserController;
  let service: UserService;
  const createCatDto: CreateUserDto = {
    username: 'User #1',
    email: 'patata',
    password: 'patata',
  };

  const mockCat = {
    username: 'Cat #1',
    email: 'Breed #1',
    password: 'patata',
    _id: 'a id',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([
              {
                username: 'Cat #1',
                email: 'Bread #1',
                password: 'patata',
              },
              {
                username: 'Cat #2',
                email: 'Breed #2',
                password: 'patata',
              },
              {
                username: 'Cat #3',
                email: 'Breed #3',
                password: 'patata',
              },
            ]),
            create: jest.fn().mockResolvedValue(createCatDto),
          },
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  describe('create()', () => {
    it('should create a new cat', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValueOnce(mockCat);

      await controller.create(createCatDto);
      expect(createSpy).toHaveBeenCalledWith(createCatDto);
    });
  });

  describe('findAll()', () => {
    it('should return an array of cats', async () => {
      expect(controller.findAll()).resolves.toEqual([
        {
          username: 'Cat #1',
          email: 'Bread #1',
          password: '',
        },
        {
          username: 'Cat #2',
          email: 'Breed #2',
          password: '',
        },
        {
          username: 'Cat #3',
          email: 'Breed #3',
          password: '',
        },
      ]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });
});