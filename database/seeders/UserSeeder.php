<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'name' => 'Максим',
                'surname' => 'Сергеев',
                'login' => 'max',
                'password' => Hash::make('111'),
                'birthday' => '1985-07-01',
            ],
            [
                'name' => 'Анастасия',
                'surname' => 'Васильева',
                'login' => 'nastya',
                'password' => Hash::make('123'),
                'birthday' => '1990-10-10',
            ],
            [
                'name' => 'Сергей',
                'surname' => 'Петров',
                'login' => 'sergey',
                'password' => Hash::make('333'),
                'birthday' => '1979-09-09',
            ],
        ];

        foreach ($users as $user) {
            $dbUser = User::create($user);
        }
    }
}
