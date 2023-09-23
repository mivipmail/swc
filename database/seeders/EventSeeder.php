<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Event;
use App\Models\User;
use App\Models\EventUser;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Event::factory(10)->create();

        $users = User::all();
        $events = Event::all();

        foreach ($events as $event) {
            for ($i = 0; $i < rand(0, $users->count()) + 1; $i++) {
                EventUser::firstOrCreate([
                    'event_id' => $event->id,
                    'user_id' => $users->random()->id,
                ]);
            }
        }
    }
}
